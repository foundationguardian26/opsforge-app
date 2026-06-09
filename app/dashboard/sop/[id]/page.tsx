import Link from 'next/link';
import { supabase } from '../../../../lib/supabase';

// Next.js 15 requires us to treat params as a Promise
export default async function SOPPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 1. Unwrap the URL parameter safely
  const resolvedParams = await params;
  const procedureId = resolvedParams.id;

  // 2. Fetch the specific SOP using that ID
  const { data: sop } = await supabase
    .from('sops')
    .select('*')
    .eq('id', procedureId)
    .single();

  // If the database can't find it, show the error screen gracefully
  if (!sop) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white font-sans">
        <h1 className="text-2xl font-bold text-red-500 mb-4">NO PROCEDURE FOUND</h1>
        <p className="text-zinc-400">Procedure {procedureId} does not exist in the database.</p>
        <Link href="/dashboard" className="text-[#D4AF37] hover:underline mt-6">← Back to Dashboard</Link>
      </div>
    );
  }

  // If it finds the data, display the black and gold procedure page
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] p-8 font-sans text-white">
      <header className="mb-10 border-b border-[#D4AF37] pb-4">
        <Link href="/dashboard" className="text-zinc-400 hover:text-white transition inline-block mb-4">← Back to Dashboard</Link>
        <div className="flex justify-between items-end">
          <h1 className="text-4xl font-bold text-[#D4AF37]">{sop.title}</h1>
          <span className="bg-[#D4AF37] text-black text-sm font-bold px-3 py-1 rounded uppercase">
            {sop.status}
          </span>
        </div>
      </header>

      <main className="max-w-4xl bg-zinc-900 border border-zinc-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 border-b border-zinc-800 pb-2">Procedure Details</h2>
        <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
          {sop.description}
        </p>
      </main>
    </div>
  );
}