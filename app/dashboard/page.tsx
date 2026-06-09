import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import AlertsSection from '../components/AlertsSection';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const { data: sops } = await supabase.from('sops').select('*');
  const { data: alerts } = await supabase
    .from('quality_alerts')
    .select('*')
    .neq('status', 'Resolved')
    .order('created_at', { ascending: false });

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] p-8 font-sans text-white">

      {/* Updated Header with the Create Button */}
      <header className="mb-10 border-b border-[#D4AF37] pb-4 flex justify-between items-end w-full">
        <div>
          <h1 className="text-4xl font-bold text-[#D4AF37] mb-2">OpsForge Dashboard</h1>
          <Link href="/" className="text-zinc-400 hover:text-white transition">← Back Home</Link>
        </div>
        <Link href="/dashboard/create" className="bg-[#D4AF37] text-black font-bold px-5 py-2 rounded hover:bg-yellow-500 transition shadow-lg">
          + New Procedure
        </Link>
      </header>

      <AlertsSection alerts={alerts ?? []} />

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sops?.map((sop) => (
          <div key={sop.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2 gap-4">
                <h2 className="text-xl font-semibold text-white">{sop.title}</h2>
                <span className="bg-[#D4AF37] text-black text-xs font-bold px-2 py-1 rounded uppercase shrink-0">
                  {sop.status}
                </span>
              </div>
              <p className="text-zinc-400 mb-4 line-clamp-3">{sop.description}</p>
            </div>
            <Link href={`/dashboard/sop/${sop.id}`} className="text-[#D4AF37] hover:underline font-medium block mt-4">
              View Procedure →
            </Link>
          </div>
        ))}
      </main>

    </div>
  );
}