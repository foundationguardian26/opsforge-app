'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../lib/supabase';
import ShiftReportButton from '../../components/ShiftReportButton';

interface Alert {
  id: string;
  issue_description: string | null;
  operator_name: string | null;
  status: string;
  created_at: string;
  sop_id: string | null;
}

const ZONES = ['All', 'Trim', 'Chassis', 'Paint', 'Final Assembly', 'Body Shop'] as const;
type Zone = (typeof ZONES)[number];

function timeAgo(iso: string): string {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

function StatusPill({ status }: { status: string }) {
  const isInProgress = status === 'In Progress';
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
        isInProgress
          ? 'text-blue-400 border-blue-800 bg-blue-950/40'
          : 'text-red-400 border-red-900 bg-red-950/40'
      }`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isInProgress ? 'bg-blue-400' : 'bg-red-500'}`} />
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${isInProgress ? 'bg-blue-400' : 'bg-red-500'}`} />
      </span>
      {status}
    </span>
  );
}

function PlaceholderWidget({ title, description }: { title: string; description: string }) {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-black text-lg uppercase tracking-widest">{title}</h2>
        <span className="text-[#D4AF37] border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full animate-pulse">
          Coming Soon
        </span>
      </div>
      <p className="text-zinc-500 text-sm mb-6">{description}</p>
      {/* Skeleton rows */}
      <div className="flex flex-col gap-3">
        {[80, 60, 70].map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-3 rounded bg-zinc-800 animate-pulse" style={{ width: `${w}%` }} />
            <div className="h-3 rounded bg-zinc-800 animate-pulse flex-1" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SupervisorPage() {
  const [alerts, setAlerts]       = useState<Alert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [zone, setZone]           = useState<Zone>('All');

  const fetchAlerts = useCallback(async () => {
    setIsLoading(true);
    const { data } = await supabase
      .from('quality_alerts')
      .select('id, issue_description, operator_name, status, created_at, sop_id')
      .in('status', ['Open', 'In Progress'])
      .order('created_at', { ascending: false });
    setAlerts(data ?? []);
    setIsLoading(false);
  }, []);

  useEffect(() => { fetchAlerts(); }, [fetchAlerts]);

  const filtered =
    zone === 'All'
      ? alerts
      : alerts.filter(a =>
          a.issue_description?.toLowerCase().includes(zone.toLowerCase()),
        );

  const openCount       = filtered.filter(a => a.status === 'Open').length;
  const inProgressCount = filtered.filter(a => a.status === 'In Progress').length;

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

        {/* ── Header ── */}
        <header className="mb-8 border-b border-[#D4AF37] pb-5 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#D4AF37] uppercase tracking-widest">
              Supervisor View
            </h1>
            <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
              Zone Intelligence Dashboard — Active Floor Alerts
            </p>
          </div>
          <ShiftReportButton />
        </header>

        {/* ── Zone Filter ── */}
        <section className="mb-6">
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">Filter by Zone</p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {ZONES.map(z => (
              <button
                key={z}
                type="button"
                onClick={() => setZone(z)}
                className={`shrink-0 px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest transition-colors border ${
                  zone === z
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                {z}
              </button>
            ))}
          </div>
        </section>

        {/* ── Summary chips ── */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-2 bg-red-950/50 border border-red-900 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
            {openCount} Open
          </span>
          <span className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-900 text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {inProgressCount} In Progress
          </span>
          {zone !== 'All' && (
            <span className="inline-flex items-center gap-2 bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Zone: {zone}
              <button
                type="button"
                onClick={() => setZone('All')}
                className="ml-1 text-zinc-500 hover:text-white transition"
              >
                ✕
              </button>
            </span>
          )}
          <button
            type="button"
            onClick={fetchAlerts}
            className="ml-auto text-zinc-600 hover:text-[#D4AF37] text-xs uppercase tracking-widest transition"
          >
            ↻ Refresh
          </button>
        </div>

        {/* ── Alert Cards ── */}
        <section className="mb-10">
          <h2 className="text-white font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            Active Alerts
            {zone !== 'All' && <span className="text-zinc-500 font-normal normal-case tracking-normal">— {zone}</span>}
          </h2>

          {isLoading ? (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-zinc-700 border-t-[#D4AF37] rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center">
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">No active alerts</p>
              <p className="text-zinc-700 text-xs mt-2">
                {zone === 'All'
                  ? 'All clear — no open issues on the floor.'
                  : `No open alerts matching zone "${zone}". Try "All" or a different zone.`}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map(alert => (
                <div
                  key={alert.id}
                  className={`rounded-xl border p-5 ${
                    alert.status === 'In Progress'
                      ? 'bg-blue-950/20 border-blue-900'
                      : 'bg-zinc-900 border-zinc-800'
                  }`}
                >
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <p className="text-white font-bold text-base leading-snug flex-1">
                      {alert.issue_description ?? 'No description'}
                    </p>
                    <StatusPill status={alert.status} />
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-800">
                    <p className="text-zinc-500 text-xs">
                      {alert.operator_name
                        ? <span className="text-zinc-400">{alert.operator_name}</span>
                        : <span className="text-zinc-600 italic">Unknown operator</span>}
                    </p>
                    <p className="text-zinc-600 text-xs">{timeAgo(alert.created_at)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── Placeholder Widgets ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderWidget
            title="WPO Cabinet Card Updates"
            description="Work Process Operations cabinet card statuses and change notifications for this zone will appear here."
          />
          <PlaceholderWidget
            title="Daily Mutilation Tracking"
            description="Vehicle damage and mutilation incidents logged per shift will be tracked and visualized here."
          />
        </div>

      </div>
    </div>
  );
}
