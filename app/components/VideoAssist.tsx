'use client';

import { useEffect, useState } from 'react';
import { LiveKitRoom, VideoConference } from '@livekit/components-react';
import '@livekit/components-styles';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Props {
  roomName:        string;
  participantName: string;
  onDisconnect?:   () => void;
}

type TokenState = 'loading' | 'ready' | 'error';

// ── Component ─────────────────────────────────────────────────────────────────

export default function VideoAssist({ roomName, participantName, onDisconnect }: Props) {
  const [token,      setToken]      = useState('');
  const [tokenState, setTokenState] = useState<TokenState>('loading');
  const [error,      setError]      = useState('');

  useEffect(() => {
    let cancelled = false;

    async function fetchToken() {
      try {
        const res  = await fetch('/api/livekit-token', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ room: roomName, participantName }),
        });
        const data = await res.json() as { ok: boolean; token?: string; error?: string };

        if (cancelled) return;

        if (!res.ok || !data.ok || !data.token) {
          setError(data.error ?? 'Failed to get video token.');
          setTokenState('error');
        } else {
          setToken(data.token);
          setTokenState('ready');
        }
      } catch {
        if (!cancelled) {
          setError('Network error. Could not reach the video service.');
          setTokenState('error');
        }
      }
    }

    fetchToken();
    return () => { cancelled = true; };
  }, [roomName, participantName]);

  const serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

  // ── Loading ───────────────────────────────────────────────────────────────
  if (tokenState === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 bg-[#0d0d0d] border border-zinc-800 rounded-xl py-20">
        <div className="w-12 h-12 border-4 border-zinc-700 border-t-[#D4AF37] rounded-full animate-spin" />
        <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest animate-pulse">
          Connecting to Video...
        </p>
        <p className="text-zinc-700 text-xs">Establishing secure channel</p>
      </div>
    );
  }

  // ── Error ─────────────────────────────────────────────────────────────────
  if (tokenState === 'error' || !serverUrl) {
    return (
      <div className="flex flex-col gap-3 bg-red-950/60 border border-red-700 rounded-xl p-6">
        <p className="text-red-400 text-xs font-black uppercase tracking-widest">
          Video Connection Failed
        </p>
        <p className="text-red-300 text-sm font-bold">
          {error || 'NEXT_PUBLIC_LIVEKIT_URL is not set in the environment.'}
        </p>
        <p className="text-red-700 text-xs">
          Verify LIVEKIT_API_KEY, LIVEKIT_API_SECRET, and NEXT_PUBLIC_LIVEKIT_URL in Vercel settings.
        </p>
      </div>
    );
  }

  // ── Live room ─────────────────────────────────────────────────────────────
  return (
    <div className="rounded-xl overflow-hidden border border-[#D4AF37]/40 bg-[#0d0d0d] shadow-2xl">

      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#1a1a1a] border-b border-[#D4AF37]/20">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
          </span>
          <span className="text-[#D4AF37] text-xs font-black uppercase tracking-widest">
            Video Assist — Live
          </span>
        </div>
        <span className="text-zinc-600 text-xs font-mono truncate max-w-[160px]">
          Room: {roomName}
        </span>
      </div>

      {/* LiveKit pre-built conference UI */}
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={serverUrl}
        onDisconnected={onDisconnect}
        data-lk-theme="default"
        style={{ height: '520px' }}
      >
        <VideoConference />
      </LiveKitRoom>
    </div>
  );
}
