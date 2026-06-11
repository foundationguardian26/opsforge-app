'use server';

export interface AlertPayload {
  stationName: string;
  issueType: string;
  alertId: string;
  timestamp: string; // ISO 8601
}

function buildHtml(payload: AlertPayload, dashboardUrl: string): string {
  const time = new Date(payload.timestamp).toLocaleString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
  });

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Andon Alert</title></head>
<body style="margin:0;padding:20px 0;background-color:#0a0a0a;font-family:helvetica,arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;">
    <tr><td>

      <!-- Header -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#D4AF37;border-radius:8px 8px 0 0;">
        <tr>
          <td style="padding:28px 32px 24px;">
            <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#7a6010;">OpsForge Operations Platform</p>
            <h1 style="margin:0 0 8px;font-size:26px;font-weight:900;color:#121212;text-transform:uppercase;letter-spacing:1px;line-height:1.2;">🚨 URGENT: STATION FAULT</h1>
            <p style="margin:0;font-size:13px;font-weight:600;color:#5a4010;">Immediate supervisor response required</p>
          </td>
        </tr>
      </table>

      <!-- Data blocks -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#121212;">
        <tr>
          <td style="padding:0 32px;">

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:16px 0 14px;width:38%;vertical-align:middle;border-bottom:1px solid #2a2a2a;">
                  <span style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;">Station</span>
                </td>
                <td style="padding:16px 0 14px;vertical-align:middle;border-bottom:1px solid #2a2a2a;">
                  <span style="font-size:15px;font-weight:700;color:#ffffff;">${payload.stationName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;width:38%;vertical-align:middle;border-bottom:1px solid #2a2a2a;">
                  <span style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;">Issue Type</span>
                </td>
                <td style="padding:14px 0;vertical-align:middle;border-bottom:1px solid #2a2a2a;">
                  <span style="font-size:15px;font-weight:700;color:#ef4444;">${payload.issueType}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;width:38%;vertical-align:middle;border-bottom:1px solid #2a2a2a;">
                  <span style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;">Timestamp</span>
                </td>
                <td style="padding:14px 0;vertical-align:middle;border-bottom:1px solid #2a2a2a;">
                  <span style="font-size:13px;color:#d1d5db;">${time}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;width:38%;vertical-align:middle;">
                  <span style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;">Alert ID</span>
                </td>
                <td style="padding:14px 0;vertical-align:middle;">
                  <span style="font-size:12px;font-family:monospace,monospace;color:#6b7280;">${payload.alertId}</span>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>

      <!-- CTA -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#121212;">
        <tr>
          <td style="padding:24px 32px 32px;text-align:center;">
            <a href="${dashboardUrl}"
               style="display:inline-block;background-color:#D4AF37;color:#121212;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:2px;padding:14px 36px;border-radius:6px;text-decoration:none;">
              Acknowledge Fault →
            </a>
          </td>
        </tr>
      </table>

      <!-- Footer -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;border-radius:0 0 8px 8px;">
        <tr>
          <td style="padding:14px 32px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#4b5563;">OpsForge — Automated Alert System</p>
          </td>
        </tr>
      </table>

    </td></tr>
  </table>
</body>
</html>`;
}

async function trySendEmail(payload: AlertPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://opsforge-app.vercel.app';
  const htmlString = buildHtml(payload, `${appUrl}/dashboard/supervisor`);

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'foundationguardian26@gmail.com',
      subject: `🚨 URGENT: Andon Cord Pulled - Station ${payload.stationName}`,
      html: htmlString,
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
