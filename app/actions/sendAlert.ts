'use server';

export interface AlertPayload {
  stationName: string;
  issueType: string;
  alertId: string;
  timestamp: string;  // ISO 8601
}

function formatMessage(p: AlertPayload): string {
  const time = new Date(p.timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });
  return [
    `🚨 ANDON ALERT — OpsForge`,
    `Station : ${p.stationName}`,
    `Issue   : ${p.issueType}`,
    `Time    : ${time}`,
    `Alert ID: ${p.alertId}`,
    `Action  : Respond to station immediately.`,
  ].join('\n');
}

async function trySendEmail(message: string, subject: string): Promise<boolean> {
  const apiKey  = process.env.RESEND_API_KEY;
  const toEmail = process.env.ALERT_EMAIL_TO;
  if (!apiKey || !toEmail) return false;

  const from = process.env.RESEND_FROM_EMAIL ?? 'OpsForge Alerts <alerts@opsforge.app>';

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to: [toEmail], subject, text: message }),
    });
    if (res.ok) return true;
    console.error('[sendAlert] Resend rejected:', await res.text());
  } catch (err) {
    console.error('[sendAlert] Resend fetch failed:', err);
  }
  return false;
}

async function trySendSMS(payload: AlertPayload): Promise<boolean> {
  const sid   = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from  = process.env.TWILIO_PHONE_NUMBER;
  if (!sid || !token || !from) return false;

  const time = new Date(payload.timestamp).toLocaleString('en-US', {
    month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
  });
  const body = `🚨 URGENT: Andon Pulled | Station: ${payload.stationName} | Issue: ${payload.issueType} | Time: ${time}`;

  try {
    const twilio = (await import('twilio')).default;
    const client = twilio(sid, token);
    await client.messages.create({ from, to: '+18179080500', body });
    return true;
  } catch (err) {
    console.error('[sendAlert] Twilio SMS failed:', err);
  }
  return false;
}

/**
 * Sends an Andon alert via Resend (email) or Twilio (SMS).
 * If neither set of env vars is present, logs the would-be message and returns
 * safely — it will never throw or crash the calling flow.
 */
export async function sendAlert(payload: AlertPayload): Promise<{ ok: boolean; channel: 'email' | 'sms' | 'console' }> {
  const message = formatMessage(payload);
  const subject = `🚨 Andon Alert — ${payload.issueType} at ${payload.stationName}`;

  // 1. Try email first (Resend)
  if (await trySendEmail(message, subject)) {
    return { ok: true, channel: 'email' };
  }

  // 2. Fall back to SMS (Twilio)
  if (await trySendSMS(payload)) {
    return { ok: true, channel: 'sms' };
  }

  // 3. Graceful degradation — no keys configured
  console.log('[sendAlert] No notification provider configured. Message that would have been sent:');
  console.log(message);
  return { ok: true, channel: 'console' };
}
