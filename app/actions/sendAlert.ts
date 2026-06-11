'use server';

export interface AlertPayload {
  stationName: string;
  issueType: string;
  alertId: string;
  timestamp: string; // ISO 8601
}

function formatHtml(p: AlertPayload): string {
  const time = new Date(p.timestamp).toLocaleString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
  });
  return `
<div style="font-family:helvetica,sans-serif;max-width:600px;margin:0 auto;background:#121212;color:#ffffff;border-radius:8px;overflow:hidden;">
  <div style="background:#D4AF37;padding:24px 32px;">
    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#121212;">OpsForge Operations Platform</p>
    <h1 style="margin:8px 0 0;font-size:26px;font-weight:900;color:#121212;text-transform:uppercase;letter-spacing:2px;">🚨 Andon Alert</h1>
  </div>
  <div style="padding:32px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #2a2a2a;color:#9ca3af;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;width:38%;">Station</td>
        <td style="padding:12px 0;border-bottom:1px solid #2a2a2a;color:#ffffff;font-size:15px;font-weight:700;">${p.stationName}</td>
      </tr>
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #2a2a2a;color:#9ca3af;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Issue</td>
        <td style="padding:12px 0;border-bottom:1px solid #2a2a2a;color:#ef4444;font-size:15px;font-weight:700;">${p.issueType}</td>
      </tr>
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #2a2a2a;color:#9ca3af;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Time</td>
        <td style="padding:12px 0;border-bottom:1px solid #2a2a2a;color:#ffffff;font-size:13px;">${time}</td>
      </tr>
      <tr>
        <td style="padding:12px 0;color:#9ca3af;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Alert ID</td>
        <td style="padding:12px 0;color:#6b7280;font-size:12px;font-family:monospace;">${p.alertId}</td>
      </tr>
    </table>
    <div style="margin-top:24px;background:#1a1a1a;border:1px solid #D4AF37;border-radius:6px;padding:16px;">
      <p style="margin:0;color:#D4AF37;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">⚡ Respond to station immediately</p>
    </div>
  </div>
  <div style="padding:14px 32px;background:#0a0a0a;text-align:center;">
    <p style="margin:0;color:#4b5563;font-size:11px;">OpsForge — Automated Alert System</p>
  </div>
</div>`.trim();
}

async function trySendEmail(payload: AlertPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'foundationguardian26@gmail.com',
      subject: `🚨 URGENT: Andon Cord Pulled - Station ${payload.stationName}`,
      html: formatHtml(payload),
    });
    if (error) {
      console.error('[sendAlert] Resend error:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('[sendAlert] Resend failed:', err);
  }
  return false;
}

export async function sendAlert(payload: AlertPayload): Promise<{ ok: boolean; channel: 'email' | 'console' }> {
  if (await trySendEmail(payload)) {
    return { ok: true, channel: 'email' };
  }

  // Graceful degradation — RESEND_API_KEY not set or send failed
  const time = new Date(payload.timestamp).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
  });
  console.log('[sendAlert] No email sent. Alert details:');
  console.log(`Station: ${payload.stationName} | Issue: ${payload.issueType} | Time: ${time} | ID: ${payload.alertId}`);
  return { ok: true, channel: 'console' };
}
