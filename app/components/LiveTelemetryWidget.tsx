'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../lib/supabase';

// ── Types ─────────────────────────────────────────────────────────────────────

interface TelemetryRow {
  id: string | number;
  station_id: string;
  operator_present: boolean | null;
  heart_rate_bpm: number | null;
  respiration_rate: number | null;
  posture_state: string | null;
  voc: number | null;
  humidity: number | null;
  safety_status: string | null;
  flags: string[] | null;
  created_at: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function timeAgo(iso: string): string {
  const secs = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (secs < 60)  return `${secs}s ago`;
  const mins = Math.floor(secs / 60);
  if (mins < 60)  return `${mins}m ago`;
  return `${Math.floor(mins / 60)}h ago`;
}

function hrColor(bpm: number | null): string {
  if (bpm === null)  return 'text-zinc-500';
  if (bpm > 120)     return 'text-red-400';
  if (bpm > 100)     return 'text-[#D4AF37]';
  return 'text-white';
}

function respColor(rate: number | null): string {
  if (rate === null)               return 'text-zinc-500';
  if (rate < 12 || rate > 20)      return 'text-[#D4AF37]';
  return 'text-white';
}

function vocColor(voc: number | null): string {
  if (voc === null)  return 'text-zinc-500';
  return voc >= 0.5  ? 'text-red-400' : 'text-green-400';
}

function humidityColor(h: number | null): string {
  if (h === null)  return 'text-zinc-500';
  return h >= 80   ? 'text-red-400' : 'text-white';
}

function postureDisplay(posture: string | null): { label: string; className: string } {
  switch (posture) {
    case 'fallen':   return { label: '⚠ FALLEN',  className: 'text-red-400 font-black animate-pulse' };
    case 'standing': return { label: 'Standing',  className: 'text-green-400' };
    case 'sitting':  return { label: 'Sitting',   className: 'text-white' };
    case 'unknown':  return { label: 'Unknown',   className: 'text-zinc-500' };
    default:         return { label: '—',         className: 'text-zinc-600' };
  }
}

// ── Sub-component: metric row ─────────────────────────────────────────────────

function MetricRow({
  label,
  value,
  valueClass = 'text-white',
  sub,
  subClass = 'text-zinc-600',
}: {
  label: string;
  value: string;
  valueClass?: string;
  sub?: string;
  subClass?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest shrink-0 pt-0.5">
        {label}
      </span>
      <div className="text-right">
        <span className={`font-black text-base leading-tight ${valueClass}`}>{value}</span>
        {sub && (
          <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${subClass}`}>{sub}</p>
        )}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

interface Props {
  stationId?: string;
}

export default function LiveTelemetryWidget({ stationId = 'STATION-01' }: Props) {
  const [row, setRow]           = useState<TelemetryRow | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tick, setTick]         = useState(0); // drives timeAgo refresh

  const fetchLatest = useCallback(async () => {
    const { data, error } = await supabase
      .from('telemetry')
      .select('*')
      .eq('station_id', stationId)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!error && data) setRow(data as TelemetryRow);
    setIsLoading(false);
  }, [stationId]);

  useEffect(() => {
    fetchLatest();

    // Real-time: fire on every INSERT or UPDATE for this station
    const channel = supabase
      .channel(`telemetry-${stationId}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'telemetry', filter: `station_id=eq.${stationId}` },
        (payload) => {
          if (payload.new && Object.keys(payload.new).length > 0) {
            setRow(payload.new as TelemetryRow);
          }
        },
      )
      .subscribe();

    // Tick every 30 s so the "X ago" timestamp stays fresh without a re-fetch
    const timer = setInterval(() => setTick((n) => n + 1), 30_000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(timer);
    };
  }, [stationId, fetchLatest]);

  // Suppress unused-variable warning — tick is intentionally read to force re-render
  void tick;

  const isLockout = row?.safety_status === 'lockout';
  const flags     = row?.flags ?? [];
  const posture   = postureDisplay(row?.posture_state ?? null);

  // ── Loading ───────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center py-14">
        <div className="w-8 h-8 border-4 border-zinc-700 border-t-[#D4AF37] rounded-full animate-spin" />
      </div>
    );
  }

  // ── No data yet ───────────────────────────────────────────────────────────
  if (!row) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col items-center justify-center py-14 gap-2">
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">
          Awaiting First Ping
        </p>
        <p className="text-zinc-700 text-xs">
          No telemetry data received from {stationId} yet.
        </p>
      </div>
    );
  }

  // ── Live data ─────────────────────────────────────────────────────────────
  return (
    <div className={`rounded-xl overflow-hidden border shadow-2xl transition-all ${
      isLockout
        ? 'border-red-700 shadow-red-950/60'
        : 'border-zinc-800'
    }`}>

      {/* ── Header bar ── */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-[#1a1a1a] border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <span className="text-[#D4AF37] font-black text-xs uppercase tracking-widest">
            Vital Mesh
          </span>
          <span className="text-zinc-700 text-xs select-none">|</span>
          <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            {stationId}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-zinc-600 text-xs">
            Last ping: {timeAgo(row.created_at)}
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4AF37]" />
          </span>
          <span className="text-[#D4AF37] text-xs font-black uppercase tracking-widest">Live</span>
        </div>
      </div>

      <div className="bg-[#121212] p-6 flex flex-col gap-5">

        {/* ── Status banner ── */}
        <div className={`flex items-center justify-between px-5 py-4 rounded-lg border ${
          isLockout
            ? 'bg-red-950/50 border-red-700'
            : 'bg-green-950/30 border-green-800'
        }`}>
          <div className="flex items-center gap-3">
            <span className="relative flex h-4 w-4">
              {isLockout && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              )}
              <span className={`relative inline-flex h-4 w-4 rounded-full ${isLockout ? 'bg-red-500' : 'bg-green-400'}`} />
            </span>
            <span className={`font-black text-2xl uppercase tracking-widest ${isLockout ? 'text-red-400' : 'text-green-400'}`}>
              {isLockout ? 'LOCKOUT' : 'SAFE'}
            </span>
          </div>
          <div className="text-right">
            <p className="text-zinc-500 text-xs uppercase tracking-widest">
              {row.operator_present ? 'Operator Present' : 'No Operator'}
            </p>
            <p className="text-zinc-600 text-xs mt-0.5">
              {new Date(row.created_at).toLocaleTimeString('en-US', {
                hour: '2-digit', minute: '2-digit', second: '2-digit',
              })}
            </p>
          </div>
        </div>

        {/* ── Active fault flags ── */}
        {isLockout && flags.length > 0 && (
          <div className="bg-red-950/60 border border-red-800 rounded-lg p-4">
            <p className="text-red-400 text-xs font-black uppercase tracking-widest mb-3">
              ⚠ Active Fault Flags
            </p>
            <div className="flex flex-col gap-2">
              {flags.map((flag) => (
                <div key={flag} className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  <span className="text-red-300 font-black text-sm uppercase tracking-widest">
                    {flag.replace(/_/g, ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Metrics grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Biometrics panel */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            <p className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-5">
              Biometrics
            </p>
            <div className="flex flex-col gap-4">
              <MetricRow
                label="Heart Rate"
                value={row.heart_rate_bpm !== null ? `${row.heart_rate_bpm} BPM` : '—'}
                valueClass={hrColor(row.heart_rate_bpm)}
                sub={
                  row.heart_rate_bpm !== null && row.heart_rate_bpm > 120 ? 'Tachycardia' :
                  row.heart_rate_bpm !== null && row.heart_rate_bpm > 100 ? 'Elevated'    : undefined
                }
                subClass={row.heart_rate_bpm !== null && row.heart_rate_bpm > 120 ? 'text-red-500' : 'text-[#D4AF37]'}
              />
              <div className="h-px bg-zinc-800" />
              <MetricRow
                label="Respiration"
                value={row.respiration_rate !== null ? `${row.respiration_rate} /min` : '—'}
                valueClass={respColor(row.respiration_rate)}
                sub={
                  row.respiration_rate !== null && (row.respiration_rate < 12 || row.respiration_rate > 20)
                    ? 'Outside normal range'
                    : undefined
                }
                subClass="text-[#D4AF37]"
              />
              <div className="h-px bg-zinc-800" />
              <MetricRow
                label="Posture"
                value={posture.label}
                valueClass={posture.className}
              />
            </div>
          </div>

          {/* Environment panel */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            <p className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-5">
              Environment
            </p>
            <div className="flex flex-col gap-4">
              <MetricRow
                label="VOC Level"
                value={row.voc !== null ? `${row.voc.toFixed(2)} mg/m³` : '—'}
                valueClass={vocColor(row.voc)}
                sub={
                  row.voc !== null
                    ? row.voc >= 0.5 ? 'Threshold exceeded' : 'Within safe limits'
                    : undefined
                }
                subClass={row.voc !== null && row.voc >= 0.5 ? 'text-red-500' : 'text-green-700'}
              />
              <div className="h-px bg-zinc-800" />
              <MetricRow
                label="Humidity"
                value={row.humidity !== null ? `${row.humidity.toFixed(1)}%` : '—'}
                valueClass={humidityColor(row.humidity)}
                sub={
                  row.humidity !== null
                    ? row.humidity >= 80 ? 'Stop-work threshold' : 'Within safe limits'
                    : undefined
                }
                subClass={row.humidity !== null && row.humidity >= 80 ? 'text-red-500' : 'text-green-700'}
              />
              <div className="h-px bg-zinc-800" />
              {/* VOC threshold bar */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-zinc-600 text-xs uppercase tracking-widest">VOC Threshold</span>
                  <span className="text-zinc-600 text-xs">0.50 mg/m³ limit</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      row.voc !== null && row.voc >= 0.5 ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${Math.min(((row.voc ?? 0) / 0.5) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
