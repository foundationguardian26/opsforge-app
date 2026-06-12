import { NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: 'Body must be a JSON object.' }, { status: 400 });
  }

  const { room, participantName } = body as Record<string, unknown>;

  if (typeof room !== 'string' || !room.trim()) {
    return NextResponse.json(
      { ok: false, error: 'room: required non-empty string.' },
      { status: 422 },
    );
  }
  if (typeof participantName !== 'string' || !participantName.trim()) {
    return NextResponse.json(
      { ok: false, error: 'participantName: required non-empty string.' },
      { status: 422 },
    );
  }

  const apiKey    = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    console.error('[livekit-token] LIVEKIT_API_KEY or LIVEKIT_API_SECRET not set.');
    return NextResponse.json(
      { ok: false, error: 'Video service is not configured. Contact your system administrator.' },
      { status: 503 },
    );
  }

  const token = new AccessToken(apiKey, apiSecret, {
    identity: participantName.trim(),
    ttl:      1800, // 30 minutes
  });

  token.addGrant({
    roomJoin:     true,
    room:         room.trim(),
    canPublish:   true,
    canSubscribe: true,
  });

  const jwt = await token.toJwt();

  return NextResponse.json({ ok: true, token: jwt });
}
