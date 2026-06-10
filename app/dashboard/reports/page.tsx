'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';

export default function ReportsPage() {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResolved = async () => {
      const { data } = await supabase
        .from('quality_alerts')
        .select('*')
        .eq('status', 'Resolved')
        .order('created_at', { ascending: false });
      setAlerts(data ?? []);
      setLoading(false);
    };
    fetchResolved();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] p-8 font-sans text-white">

      <header className="mb-10 border-b border-[#D4AF37] pb-4 flex justify-between items-end w-full print:mb-4">
        <div>
          <h1 className="text-4xl font-bold text-[#D4AF37] mb-2">Shift Report</h1>
          <Link href="/dashboard" className="text-zinc-400 hover:text-white transition print:hidden">
            ← Back to Dashboard
          </Link>
        </div>
        <button
          onClick={() => window.print()}
          className="print:hidden bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold px-5 py-2 rounded transition shadow-lg"
        >
          Print Shift Report
        </button>
      </header>

      <main>
        {loading ? (
          <p className="text-zinc-400 animate-pulse">Loading resolved alerts...</p>
        ) : alerts.length === 0 ? (
          <p className="text-zinc-500">No resolved alerts on record.</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#D4AF37]">
                <th className="py-3 pr-6 text-[#D4AF37] font-bold uppercase text-sm tracking-wider">Issue</th>
                <th className="py-3 pr-6 text-[#D4AF37] font-bold uppercase text-sm tracking-wider whitespace-nowrap">Reported At</th>
                <th className="py-3 text-[#D4AF37] font-bold uppercase text-sm tracking-wider">Reporter ID</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.id} className="border-b border-zinc-800 hover:bg-zinc-900 transition">
                  <td className="py-4 pr-6 text-white">{alert.issue_description}</td>
                  <td className="py-4 pr-6 text-zinc-400 text-sm whitespace-nowrap">
                    {new Date(alert.created_at).toLocaleString()}
                  </td>
                  <td className="py-4 text-zinc-500 text-xs font-mono break-all">
                    {alert.reporter_id ?? '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>

    </div>
  );
}
