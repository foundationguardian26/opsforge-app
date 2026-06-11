import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import AnalyticsCharts from '../../components/AnalyticsCharts';
import ShiftReportButton from '../../components/ShiftReportButton';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://anmkzachozworppovcxi.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const dynamic = 'force-dynamic';

interface AlertRow {
  id: string;
  sop_id: string | null;
  issue_description: string | null;
  operator_name: string | null;
  reporter_id: string | null;
  status: string;
  created_at: string;
}

export default async function AdminDashboard() {
  let rows: AlertRow[] = [];
  let fetchError: string | null = null;

  try {
    const query = supabase
      .from('quality_alerts')
      .select('id, sop_id, issue_description, operator_name, reporter_id, status, created_at')
      .order('created_at', { ascending: false });

    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Database query timed out after 5 seconds.')), 5000)
    );

    const { data, error } = await Promise.race([query, timeout]);

    if (error) throw new Error(error.message);
    rows = data ?? [];
  } catch (err: unknown) {
    fetchError = err instanceof Error ? err.message : 'An unknown error occurred.';
  }

  const total = rows.length;
  const resolved = rows.filter((a) => a.status === 'Resolved').length;
  const active = total - resolved;
  const resolutionRate = total > 0 ? Math.round((resolved / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-8">

      <header className="mb-10 border-b border-[#D4AF37] pb-4 flex justify-between items-end">
        <div>
          <Link href="/dashboard" className="text-zinc-400 hover:text-white transition inline-block mb-3">
            ← Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-[#D4AF37]">Plant Manager</h1>
          <p className="text-zinc-400 text-sm mt-1 uppercase tracking-widest">God Mode — Live Floor Intelligence</p>
        </div>
        <div className="flex flex-col items-end gap-3 self-end">
          <ShiftReportButton />
          <span className="text-xs text-zinc-600 uppercase tracking-widest">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </header>

      {/* ── Fetch error banner ── */}
      {fetchError && (
        <div className="mb-8 bg-red-950 border border-red-600 text-red-400 p-4 rounded-lg text-sm font-bold">
          <p className="uppercase tracking-widest text-xs mb-1">Data Fetch Error</p>
          <p className="font-mono text-xs">{fetchError}</p>
          <p className="text-red-600 text-xs mt-2">
            Metrics below reflect 0 records. Check RLS policies on the quality_alerts table or Supabase connectivity.
          </p>
        </div>
      )}

      {/* ── KPI Cards ── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        <div className="bg-zinc-900 border border-red-900 rounded-lg p-6 flex flex-col gap-2 shadow-lg">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Active Alerts</p>
          <p className="text-6xl font-black text-red-500 leading-none">{active}</p>
          <p className="text-zinc-500 text-xs mt-1">Open or Critical — requires attention</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 flex flex-col gap-2 shadow-lg">
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Total Issues Logged</p>
          <p className="text-6xl font-black text-white leading-none">{total}</p>
          <p className="text-zinc-500 text-xs mt-1">All time across all procedures</p>
        </div>

        <div className="bg-zinc-900 border border-[#D4AF37]/40 rounded-lg p-6 flex flex-col gap-2 shadow-lg">
          <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Resolution Rate</p>
          <p className="text-6xl font-black text-[#D4AF37] leading-none">{resolutionRate}%</p>
          <div className="mt-2 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D4AF37] rounded-full"
              style={{ width: `${resolutionRate}%` }}
            />
          </div>
          <p className="text-zinc-500 text-xs">{resolved} of {total} issues closed</p>
        </div>

      </section>

      <AnalyticsCharts alerts={rows.map((r) => ({ status: r.status, created_at: r.created_at }))} />

      {/* ── Live Floor Activity Table ── */}
      <section>
        <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          Live Floor Activity
        </h2>

        {rows.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">0 Active Alerts</p>
            <p className="text-zinc-700 text-xs mt-2">
              {fetchError ? 'Could not load alert data.' : 'The floor is quiet. All clear.'}
            </p>
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-[#1a1a1a]">
                  <th className="text-left text-[#D4AF37] font-bold uppercase tracking-widest text-xs px-6 py-4">Description</th>
                  <th className="text-left text-[#D4AF37] font-bold uppercase tracking-widest text-xs px-6 py-4">Operator</th>
                  <th className="text-left text-[#D4AF37] font-bold uppercase tracking-widest text-xs px-6 py-4">Status</th>
                  <th className="text-left text-[#D4AF37] font-bold uppercase tracking-widest text-xs px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((alert, i) => {
                  const isResolved = alert.status === 'Resolved';
                  const isCritical = alert.status === 'Critical';
                  const operator = alert.operator_name
                    ?? (alert.reporter_id ? `UID …${String(alert.reporter_id).slice(-6)}` : 'Unknown');

                  return (
                    <tr
                      key={alert.id}
                      className={`border-b border-zinc-800/60 transition-colors hover:bg-zinc-800/40 ${i % 2 !== 0 ? 'bg-zinc-900/50' : ''}`}
                    >
                      <td className="px-6 py-4 text-zinc-300 max-w-xs">
                        <p className="line-clamp-2 leading-snug">{alert.issue_description || '—'}</p>
                      </td>

                      <td className="px-6 py-4 text-zinc-400 whitespace-nowrap font-mono text-xs">
                        {operator}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {isResolved ? (
                          <span className="inline-flex items-center gap-2 text-green-400 font-bold text-xs uppercase tracking-widest">
                            <span className="h-2 w-2 rounded-full bg-green-400 shrink-0" />
                            Resolved
                          </span>
                        ) : (
                          <span className={`inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest ${isCritical ? 'text-orange-400' : 'text-red-400'}`}>
                            <span className="relative flex h-2 w-2 shrink-0">
                              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isCritical ? 'bg-orange-400' : 'bg-red-500'}`} />
                              <span className={`relative inline-flex rounded-full h-2 w-2 ${isCritical ? 'bg-orange-400' : 'bg-red-500'}`} />
                            </span>
                            {alert.status}
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4 text-zinc-500 text-xs whitespace-nowrap">
                        {new Date(alert.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                        <br />
                        <span className="text-zinc-600">
                          {new Date(alert.created_at).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

    </div>
  );
}
