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

async function trySendSMS(message: string): Promise<boolean> {
  const sid   = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from  = process.env.TWILIO_FROM_NUMBER;
  const to    = process.env.ALERT_PHONE_NUMBER;
  if (!sid || !token || !from || !to) return false;

  try {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ To: to, From: from, Body: message }).toString(),
      },
    );
    if (res.ok) return true;
    console.error('[sendAlert] Twilio rejected:', await res.text());
  } catch (err) {
    console.error('[sendAlert] Twilio fetch failed:', err);
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
  if (await trySendSMS(message)) {
    return { ok: true, channel: 'sms' };
  }

  // 3. Graceful degradation — no keys configured
  console.log('[sendAlert] No notification provider configured. Message that would have been sent:');
  console.log(message);
  return { ok: true, channel: 'console' };
}
