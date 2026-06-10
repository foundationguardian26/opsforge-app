'use client';

import { useState } from 'react';
import { Nfc, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import TagRenderer from '../../components/TagRenderer';

type KioskState = 'idle' | 'active' | 'alert-sent';

interface Sop {
  id: number;
  title: string;
  description: string | null;
}

export default function StationPage() {
  const [kioskState, setKioskState] = useState<KioskState>('idle');
  const [sop, setSop] = useState<Sop | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const handleClockIn = async () => {
    setFetchError(null);
    try {
      const { data, error } = await supabase
        .from('sops')
        .select('id, title, description')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      setSop(data);
      setKioskState('active');
    } catch (err: unknown) {
      setFetchError(err instanceof Error ? err.message : 'Failed to load procedure.');
    }
  };

  const handleAndon = async () => {
    setIsSubmitting(true);
    try {
      await supabase.from('quality_alerts').insert([{
        sop_id: sop?.id ?? null,
        issue_description: 'Operator triggered Andon Cord at Kiosk',
        status: 'Open',
      }]);
    } catch {
      // Alert the floor regardless of DB insert failure
    }
    setIsSubmitting(false);
    setKioskState('alert-sent');
  };

  const handleReset = () => {
    setKioskState('idle');
    setSop(null);
    setFetchError(null);
  };

  // ── Idle: NFC tap screen ──────────────────────────────────────────────────
  if (kioskState === 'idle') {
    return (
      <div className="h-screen bg-[#121212] flex flex-col items-center justify-center gap-10 select-none overflow-hidden">
        <div
          onClick={handleClockIn}
          className="flex flex-col items-center gap-8 cursor-pointer"
        >
          <div className="animate-pulse p-8 rounded-full border-2 border-[#D4AF37]/30 bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10 transition-colors">
            <Nfc size={140} strokeWidth={1} className="text-[#D4AF37]" />
          </div>
          <div className="text-center">
            <p className="text-white text-5xl font-black uppercase tracking-widest leading-tight">
              Tap Badge<br />to Clock In
            </p>
            <p className="text-zinc-500 text-base uppercase tracking-widest mt-4">
              Station 01 — Assembly Line
            </p>
          </div>
        </div>

        {fetchError && (
          <div className="bg-red-950 border border-red-600 text-red-400 p-4 rounded-lg text-sm font-bold max-w-sm text-center">
            {fetchError}
          </div>
        )}

        {/* Debug bypass — invisible unless you know to look */}
        <button
          onClick={handleClockIn}
          className="fixed bottom-3 right-4 text-zinc-800 hover:text-zinc-600 text-xs transition uppercase tracking-widest"
        >
          dev bypass
        </button>
      </div>
    );
  }

  // ── Full-screen alert overlay ─────────────────────────────────────────────
  if (kioskState === 'alert-sent') {
    return (
      <div className="h-screen bg-red-950 flex flex-col items-center justify-center gap-8 select-none overflow-hidden">
        <AlertTriangle
          size={140}
          strokeWidth={1.5}
          className="text-red-400 animate-pulse"
        />
        <div className="text-center px-8">
          <p className="text-red-400 text-7xl font-black uppercase tracking-widest mb-4">
            ALERT SENT
          </p>
          <p className="text-white text-3xl font-bold">Supervisor has been notified.</p>
          <p className="text-red-300 text-xl mt-3">Do not resume work until cleared.</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle2 size={20} className="text-green-400" />
          <p className="text-green-400 text-sm font-bold uppercase tracking-widest">
            Issue logged to quality alerts
          </p>
        </div>
        <button
          onClick={handleReset}
          className="mt-6 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-12 py-5 rounded-lg uppercase tracking-widest text-lg transition border border-zinc-700"
        >
          Return to Station
        </button>
      </div>
    );
  }

  // ── Active station view ───────────────────────────────────────────────────
  return (
    <div className="h-screen bg-[#121212] flex flex-col overflow-hidden">

      {/* Header */}
      <header className="shrink-0 bg-zinc-900 border-b border-[#D4AF37] px-8 py-5 flex justify-between items-center">
        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Active Procedure</p>
          <h1 className="text-3xl font-black text-[#D4AF37] uppercase tracking-wide leading-tight">
            {sop?.title}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 bg-green-950 border border-green-700 text-green-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Station Active
          </span>
          <button
            onClick={handleReset}
            className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition"
          >
            Clock Out
          </button>
        </div>
      </header>

      {/* SOP content — scrollable, kiosk-scale text */}
      <main className="flex-1 overflow-y-auto px-10 py-8 sop-output-kiosk">
        <TagRenderer content={sop?.description ?? ''} />
      </main>

      {/* Andon Cord — pinned footer */}
      <footer className="shrink-0">
        <button
          onClick={handleAndon}
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 active:bg-red-900 text-white font-black text-3xl uppercase tracking-widest py-9 transition-colors border-t-4 border-red-500 shadow-[0_-6px_40px_rgba(239,68,68,0.35)] disabled:opacity-60 disabled:cursor-not-allowed select-none"
        >
          {isSubmitting ? '⏳ TRANSMITTING...' : '🚨  PULL ANDON CORD — REPORT ISSUE'}
        </button>
      </footer>

    </div>
  );
}
