import Link from 'next/link';
import { supabase } from '../../../lib/supabase';

export const dynamic = 'force-dynamic';

export default async function SOPLibraryPage() {
  const { data: sops } = await supabase
    .from('sops')
    .select('id, title, status, created_at')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-8">
      <header className="mb-10 border-b border-[#D4AF37] pb-4 flex justify-between items-end">
        <div>
          <Link href="/dashboard" className="text-zinc-400 hover:text-white transition inline-block mb-3">
            ← Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-[#D4AF37]">SOP Library</h1>
          <p className="text-zinc-400 text-sm mt-1 uppercase tracking-widest">
            {sops && sops.length > 0
              ? `${sops.length} procedure${sops.length !== 1 ? 's' : ''} on file`
              : 'Standard Operating Procedures'}
          </p>
        </div>
        <Link
          href="/dashboard/creator"
          className="bg-[#D4AF37] text-black font-bold px-5 py-2 rounded hover:bg-yellow-500 transition shadow-lg text-sm uppercase tracking-widest"
        >
          + New SOP
        </Link>
      </header>

      {!sops || sops.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 gap-6 text-center">
          <div className="text-6xl opacity-20">📂</div>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-lg">
            No SOPs published yet
          </p>
          <p className="text-zinc-600 text-sm max-w-xs">
            Use the AI Authoring Engine to generate and publish your first job instruction.
          </p>
          <Link
            href="/dashboard/creator"
            className="bg-[#D4AF37] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition shadow-lg uppercase tracking-widest text-sm"
          >
            Go to SOP Creator
          </Link>
        </div>
      ) : (
        <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sops.map((sop) => (
            <Link
              key={sop.id}
              href={`/dashboard/sop/${sop.id}`}
              className="group bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37] rounded-lg p-6 flex flex-col justify-between transition shadow-lg"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h2 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition leading-snug">
                    {sop.title}
                  </h2>
                  <span className="bg-[#D4AF37] text-black text-xs font-bold px-2 py-1 rounded uppercase shrink-0">
                    {sop.status}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-800">
                <p className="text-zinc-500 text-xs">
                  {new Date(sop.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest group-hover:underline">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </main>
      )}
    </div>
  );
}
