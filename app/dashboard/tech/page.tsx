'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../lib/supabase';
import Link from 'next/link';

interface Alert {
  id: string;
  issue_description: string | null;
  operator_name: string | null;
  status: string;
  created_at: string;
  sop_id: string | null;
  sop_title?: string | null;
}

function timeAgo(iso: string): string {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

function StatusBadge({ status }: { status: string }) {
  const cfg =
    status === 'In Progress'
      ? { dot: 'bg-blue-400 animate-pulse', text: 'text-blue-400', border: 'border-blue-800' }
      : { dot: 'bg-red-500 animate-ping',   text: 'text-red-400',  border: 'border-red-900'  };

  return (
    <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-transparent ${cfg.text} ${cfg.border}`}>
      <span className={`relative flex h-2 w-2`}>
        <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${cfg.dot}`} />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${cfg.dot.replace(' animate-pulse', '').replace(' animate-ping', '')}`} />
      </span>
      {status}
    </span>
  );
}

export default function TechDispatchPage() {
  const [alerts, setAlerts]     = useState<Alert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [busyId, setBusyId]     = useState<string | null>(null);

  const fetchAlerts = useCallback(async () => {
    setIsLoading(true);
    const { data } = await supabase
      .from('quality_alerts')
      .select('id, issue_description, operator_name, status, created_at, sop_id')
      .in('status', ['Open', 'In Progress'])
      .order('created_at', { ascending: false });

    if (!data) { setIsLoading(false); return; }

    // Enrich with SOP title where possible
    const sopIds = [...new Set(data.map(a => a.sop_id).filter(Boolean))];
    let sopMap: Record<string, string> = {};
    if (sopIds.length) {
      const { data: sops } = await supabase
        .from('sops')
        .select('id, title')
        .in('id', sopIds);
      if (sops) sopMap = Object.fromEntries(sops.map(s => [String(s.id), s.title]));
    }

    setAlerts(data.map(a => ({ ...a, sop_title: a.sop_id ? sopMap[String(a.sop_id)] ?? null : null })));
    setIsLoading(false);
  }, []);

  useEffect(() => { fetchAlerts(); }, [fetchAlerts]);

  const updateStatus = async (id: string, newStatus: string) => {
    setBusyId(id);
    const { error } = await supabase
      .from('quality_alerts')
      .update({ status: newStatus })
      .eq('id', id);

    if (!error) {
      if (newStatus === 'Resolved') {
        setAlerts(prev => prev.filter(a => a.id !== id));
      } else {
        setAlerts(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
      }
    }
    setBusyId(null);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-4 md:p-8">
      <header className="mb-6 border-b border-[#D4AF37] pb-4 flex justify-between items-end">
        <div>
          <Link href="/dashboard" className="text-zinc-400 hover:text-white transition text-sm inline-block mb-2">
            ← Dashboard
          </Link>
          <h1 className="text-3xl font-black text-[#D4AF37] uppercase tracking-widest">Tech Dispatch</h1>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Floor Alert Queue</p>
        </div>
        <button
          onClick={fetchAlerts}
          className="text-xs text-zinc-500 hover:text-[#D4AF37] uppercase tracking-widest transition"
        >
          ↻ Refresh
        </button>
      </header>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-zinc-700 border-t-[#D4AF37] rounded-full animate-spin" />
        </div>
      ) : alerts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
          <p className="text-5xl opacity-20">✅</p>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">No active alerts</p>
          <p className="text-zinc-700 text-xs">The floor is clear.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-zinc-600 text-xs uppercase tracking-widest mb-1">
            {alerts.length} alert{alerts.length !== 1 ? 's' : ''} requiring attention
          </p>

          {alerts.map(alert => {
            const isInProgress = alert.status === 'In Progress';
            const isBusy = busyId === alert.id;

            return (
              <div
                key={alert.id}
                className={`rounded-xl border p-5 transition-colors ${
                  isInProgress
                    ? 'bg-blue-950/30 border-blue-800'
                    : 'bg-zinc-900 border-zinc-800'
                }`}
              >
                {/* Top row */}
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-lg leading-snug truncate">
                      {alert.issue_description ?? 'No description'}
                    </p>
                    {alert.sop_title && (
                      <p className="text-zinc-400 text-sm mt-0.5">
                        Station: <span className="text-zinc-200">{alert.sop_title}</span>
                      </p>
                    )}
                    {alert.operator_name && (
                      <p className="text-zinc-500 text-xs mt-0.5">
                        Operator: {alert.operator_name}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <StatusBadge status={alert.status} />
                    <span className="text-zinc-600 text-xs">{timeAgo(alert.created_at)}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-4">
                  {!isInProgress && (
                    <button
                      onClick={() => updateStatus(alert.id, 'In Progress')}
                      disabled={isBusy}
                      className="flex-1 py-4 rounded-lg font-bold text-sm uppercase tracking-widest bg-blue-900 hover:bg-blue-800 text-blue-300 border border-blue-700 transition disabled:opacity-50"
                    >
                      {isBusy ? '...' : 'Claim'}
                    </button>
                  )}
                  <button
                    onClick={() => updateStatus(alert.id, 'Resolved')}
                    disabled={isBusy}
                    className="flex-1 py-4 rounded-lg font-bold text-sm uppercase tracking-widest bg-green-950 hover:bg-green-900 text-green-400 border border-green-800 transition disabled:opacity-50"
                  >
                    {isBusy ? '...' : 'Resolve'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
