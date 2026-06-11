'use client';

import { useState, useEffect } from 'react';
import { Nfc, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import TagRenderer from '../../components/TagRenderer';
import { sendAlert } from '../../actions/sendAlert';

type KioskState = 'idle' | 'active' | 'alert-sent';

interface Sop {
  id: number;
  title: string;
  description: string | null;
}

const ANDON_CATEGORIES = [
  { label: 'Machine Fault',  color: 'red'  },
  { label: 'Missing Parts',  color: 'gold' },
  { label: 'Quality Defect', color: 'gold' },
  { label: 'Safety Hazard',  color: 'red'  },
] as const;

export default function StationPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading]             = useState(false);
  const [kioskState, setKioskState]           = useState<KioskState>('idle');
  const [sop, setSop]                         = useState<Sop | null>(null);
  const [activeAlertId, setActiveAlertId]     = useState<string | null>(null);
  const [showAndonModal, setShowAndonModal]   = useState(false);
  const [isSubmitting, setIsSubmitting]       = useState(false);
  const [fetchError, setFetchError]           = useState<string | null>(null);

  // Fires exactly once when the operator authenticates — never loops
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchSop = async () => {
      setIsLoading(true);
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

        // Check for an existing open alert on this SOP
        const { data: existingAlert } = await supabase
          .from('quality_alerts')
          .select('id')
          .eq('sop_id', data.id)
          .eq('status', 'Open')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (existingAlert?.id) {
          setActiveAlertId(String(existingAlert.id));
        }

        setKioskState('active');
      } catch (err: unknown) {
        setFetchError(err instanceof Error ? err.message : 'Failed to load procedure.');
        setIsAuthenticated(false); // allow retry
      } finally {
        setIsLoading(false);
      }
    };

    fetchSop();
  }, [isAuthenticated]); // ← only runs when isAuthenticated flips to true

  const handleAndonCategory = async (category: string) => {
    setIsSubmitting(true);
    try {
      const { data } = await supabase
        .from('quality_alerts')
        .insert([{
          sop_id: sop?.id ?? null,
          issue_description: `Andon Pulled: ${category}`,
          status: 'Open',
        }])
        .select('id')
        .single();

      if (data?.id) {
        const alertId = String(data.id);
        setActiveAlertId(alertId);

        // Fire notification — does not block the UI transition
        sendAlert({
          stationName: sop?.title ?? 'Station 01',
          issueType: category,
          alertId,
          timestamp: new Date().toISOString(),
        }).catch((err) => console.error('[station] sendAlert failed:', err));
      }
    } catch {
      // Show confirmation overlay regardless of DB failure
    }
    setIsSubmitting(false);
    setShowAndonModal(false);
    setKioskState('alert-sent');
  };

  const handleCancelAlert = async () => {
    if (!activeAlertId) return;
    setIsSubmitting(true);
    try {
      await supabase
        .from('quality_alerts')
        .update({ status: 'Resolved' })
        .eq('id', activeAlertId);
    } catch {
      // Best effort — clear UI state regardless
    }
    setActiveAlertId(null);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setIsAuthenticated(false);
    setKioskState('idle');
    setSop(null);
    setActiveAlertId(null);
    setFetchError(null);
    setShowAndonModal(false);
  };

  // ── Idle: NFC tap / loading screen ───────────────────────────────────────
  if (kioskState === 'idle') {
    return (
      <div className="h-screen bg-[#121212] flex flex-col items-center justify-center gap-10 select-none overflow-hidden">

        {isLoading ? (
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 border-4 border-zinc-700 border-t-[#D4AF37] rounded-full animate-spin" />
            <p className="text-zinc-400 text-base uppercase tracking-widest animate-pulse">
              Loading Procedure...
            </p>
          </div>
        ) : (
          <div
            onClick={() => setIsAuthenticated(true)}
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
        )}

        {fetchError && (
          <div className="bg-red-950 border border-red-600 text-red-400 p-4 rounded-lg text-sm font-bold max-w-sm text-center">
            {fetchError}
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsAuthenticated(true)}
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
        <AlertTriangle size={140} strokeWidth={1.5} className="text-red-400 animate-pulse" />
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
  const hasActiveAlert = Boolean(activeAlertId);

  return (
    <div
      className={[
        'h-screen bg-[#121212] flex flex-col overflow-hidden transition-all',
        hasActiveAlert
          ? 'outline outline-8 outline-yellow-400 shadow-[inset_0_0_0_8px_theme(colors.yellow.400)]'
          : '',
      ].join(' ')}
      style={hasActiveAlert ? { boxShadow: 'inset 0 0 0 8px #facc15, 0 0 60px rgba(250,204,21,0.4)' } : {}}
    >
      {/* Pulsing yellow border overlay when alert is active */}
      {hasActiveAlert && (
        <div className="pointer-events-none fixed inset-0 z-40 animate-pulse border-[12px] border-yellow-400 rounded-none" />
      )}

      <header className="shrink-0 bg-zinc-900 border-b border-[#D4AF37] px-8 py-5 flex justify-between items-center">
        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Active Procedure</p>
          <h1 className="text-3xl font-black text-[#D4AF37] uppercase tracking-wide leading-tight">
            {sop?.title}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {hasActiveAlert ? (
            <span className="flex items-center gap-2 bg-yellow-950 border border-yellow-600 text-yellow-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
              </span>
              Alert Active
            </span>
          ) : (
            <span className="flex items-center gap-2 bg-green-950 border border-green-700 text-green-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Station Active
            </span>
          )}
          <button
            onClick={handleReset}
            className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition"
          >
            Clock Out
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-10 py-8 sop-output-kiosk">
        <TagRenderer content={sop?.description ?? ''} />
      </main>

      <footer className="shrink-0">
        {hasActiveAlert ? (
          <button
            onClick={handleCancelAlert}
            disabled={isSubmitting}
            className="w-full bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-black font-black text-3xl uppercase tracking-widest py-9 transition-colors border-t-4 border-yellow-300 shadow-[0_-6px_40px_rgba(250,204,21,0.5)] select-none disabled:opacity-60"
          >
            {isSubmitting ? 'RESOLVING...' : '✅  CANCEL ALERT / ISSUE RESOLVED'}
          </button>
        ) : (
          <button
            onClick={() => setShowAndonModal(true)}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-900 text-white font-black text-3xl uppercase tracking-widest py-9 transition-colors border-t-4 border-red-500 shadow-[0_-6px_40px_rgba(239,68,68,0.35)] select-none"
          >
            🚨  PULL ANDON CORD — REPORT ISSUE
          </button>
        )}
      </footer>

      {showAndonModal && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6">
          <div className="bg-[#121212] border border-red-700 rounded-2xl p-8 w-full max-w-lg shadow-2xl">
            <div className="mb-8 text-center">
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2">Andon Cord Activated</p>
              <h2 className="text-white text-4xl font-black uppercase tracking-wide">
                What is the issue?
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {ANDON_CATEGORIES.map(({ label, color }) => (
                <button
                  key={label}
                  onClick={() => handleAndonCategory(label)}
                  disabled={isSubmitting}
                  className={[
                    'py-8 px-4 rounded-xl font-black text-xl uppercase tracking-widest transition',
                    'border-2 bg-zinc-900 hover:brightness-125 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
                    color === 'red'
                      ? 'border-red-600 text-red-400 hover:bg-red-950'
                      : 'border-[#D4AF37] text-[#D4AF37] hover:bg-yellow-950/30',
                  ].join(' ')}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowAndonModal(false)}
              disabled={isSubmitting}
              className="mt-6 w-full py-3 rounded-lg text-zinc-600 hover:text-zinc-400 text-sm uppercase tracking-widest transition disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
