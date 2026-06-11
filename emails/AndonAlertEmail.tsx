import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export interface AndonAlertEmailProps {
  stationName: string;
  issueType: string;
  alertId: string;
  timestamp: string;
  dashboardUrl: string;
}

export default function AndonAlertEmail({
  stationName,
  issueType,
  alertId,
  timestamp,
  dashboardUrl,
}: AndonAlertEmailProps) {
  const time = new Date(timestamp).toLocaleString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
  });

  return (
    <Html lang="en">
      <Head />
      <Preview>🚨 URGENT: Andon Pulled — {stationName} / {issueType}</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* ── Gold header bar ── */}
          <Section style={header}>
            <Text style={brand}>OpsForge Operations Platform</Text>
            <Heading style={title}>🚨 URGENT: STATION FAULT</Heading>
            <Text style={subtitle}>Immediate supervisor response required</Text>
          </Section>

          {/* ── Data rows ── */}
          <Section style={dataSection}>

            <Row style={dataRow}>
              <Column style={labelCol}><Text style={label}>Station</Text></Column>
              <Column style={valueCol}><Text style={valueWhite}>{stationName}</Text></Column>
            </Row>
            <Hr style={divider} />

            <Row style={dataRow}>
              <Column style={labelCol}><Text style={label}>Issue Type</Text></Column>
              <Column style={valueCol}><Text style={valueRed}>{issueType}</Text></Column>
            </Row>
            <Hr style={divider} />

            <Row style={dataRow}>
              <Column style={labelCol}><Text style={label}>Timestamp</Text></Column>
              <Column style={valueCol}><Text style={valueMuted}>{time}</Text></Column>
            </Row>
            <Hr style={divider} />

            <Row style={dataRow}>
              <Column style={labelCol}><Text style={label}>Alert ID</Text></Column>
              <Column style={valueCol}><Text style={valueId}>{alertId}</Text></Column>
            </Row>

          </Section>

          {/* ── CTA ── */}
          <Section style={ctaSection}>
            <Button href={dashboardUrl} style={ctaButton}>
              View Dashboard →
            </Button>
          </Section>

          {/* ── Footer ── */}
          <Section style={footer}>
            <Text style={footerText}>OpsForge — Automated Alert System</Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const body: React.CSSProperties = {
  backgroundColor: '#0a0a0a',
  fontFamily: 'helvetica, arial, sans-serif',
  margin: '0',
  padding: '20px 0',
};

const container: React.CSSProperties = {
  maxWidth: '580px',
  margin: '0 auto',
  backgroundColor: '#121212',
  borderRadius: '8px',
  overflow: 'hidden',
};

const header: React.CSSProperties = {
  backgroundColor: '#D4AF37',
  padding: '28px 32px 24px',
};

const brand: React.CSSProperties = {
  margin: '0 0 10px',
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: '#7a6010',
};

const title: React.CSSProperties = {
  margin: '0 0 8px',
  fontSize: '24px',
  fontWeight: '900',
  color: '#121212',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  lineHeight: '1.2',
};

const subtitle: React.CSSProperties = {
  margin: '0',
  fontSize: '13px',
  fontWeight: '600',
  color: '#5a4010',
};

const dataSection: React.CSSProperties = {
  padding: '8px 32px 4px',
};

const dataRow: React.CSSProperties = {
  width: '100%',
};

const labelCol: React.CSSProperties = {
  width: '38%',
  verticalAlign: 'middle',
  paddingTop: '14px',
  paddingBottom: '14px',
};

const valueCol: React.CSSProperties = {
  verticalAlign: 'middle',
  paddingTop: '14px',
  paddingBottom: '14px',
};

const label: React.CSSProperties = {
  margin: '0',
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: '#9ca3af',
};

const valueWhite: React.CSSProperties = {
  margin: '0',
  fontSize: '15px',
  fontWeight: '700',
  color: '#ffffff',
};

const valueRed: React.CSSProperties = {
  margin: '0',
  fontSize: '15px',
  fontWeight: '700',
  color: '#ef4444',
};

const valueMuted: React.CSSProperties = {
  margin: '0',
  fontSize: '13px',
  color: '#d1d5db',
};

const valueId: React.CSSProperties = {
  margin: '0',
  fontSize: '12px',
  fontFamily: 'monospace, monospace',
  color: '#6b7280',
};

const divider: React.CSSProperties = {
  borderTop: '1px solid #2a2a2a',
  margin: '0',
};

const ctaSection: React.CSSProperties = {
  padding: '28px 32px 32px',
  textAlign: 'center',
};

const ctaButton: React.CSSProperties = {
  backgroundColor: '#D4AF37',
  color: '#121212',
  fontSize: '13px',
  fontWeight: '900',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  padding: '14px 36px',
  borderRadius: '6px',
  textDecoration: 'none',
  display: 'inline-block',
};

const footer: React.CSSProperties = {
  backgroundColor: '#0a0a0a',
  padding: '14px 32px',
  textAlign: 'center',
};

const footerText: React.CSSProperties = {
  margin: '0',
  fontSize: '11px',
  color: '#4b5563',
};
