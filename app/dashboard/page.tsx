import Link from 'next/link';
import { supabase } from '../../lib/supabase';

export const dynamic = 'force-dynamic'; 

export default async function Dashboard() {
  const { data: sops } = await supabase.from('sops').select('*');

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] p-8 font-sans text-white">
      <header className="mb-10 border-b border-[#D4AF37] pb-4 flex justify-between items-end">
        <h1 className="text-4xl font-bold text-[#D4AF37]">OpsForge Dashboard</h1>
        <Link href="/" className="text-zinc-400 hover:text-white transition">← Back Home</Link>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sops?.map((sop) => (
          <div key={sop.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold text-white">{sop.title}</h2>
              <span className="bg-[#D4AF37] text-black text-xs font-bold px-2 py-1 rounded uppercase">
                {sop.status}
              </span>
            </div>
            <p className="text-zinc-400 mb-4">{sop.description}</p>
            <Link href={`/dashboard/sop/${sop.id}`} className="text-[#D4AF37] hover:underline font-medium block mt-4">
              View Procedure →
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}