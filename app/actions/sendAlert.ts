'use server';

import * as React from 'react';
import AndonAlertEmail from '../../emails/AndonAlertEmail';

export interface AlertPayload {
  stationName: string;
  issueType: string;
  alertId: string;
  timestamp: string; // ISO 8601
}

async function trySendEmail(payload: AlertPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://opsforge-app.vercel.app';
  const dashboardUrl = `${appUrl}/dashboard/supervisor`;

  const element = React.createElement(AndonAlertEmail, { ...payload, dashboardUrl });

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'foundationguardian26@gmail.com',
      subject: `🚨 URGENT: Andon Cord Pulled - Station ${payload.stationName}`,
      react: element,
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
