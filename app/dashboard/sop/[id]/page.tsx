import Link from 'next/link';
import { supabase } from '../../../../lib/supabase';
import AndonButton from '../../../../components/AndonButton';

export default async function SOPPage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const procedureId = resolvedParams.id;

  const { data: sop } = await supabase
    .from('sops')
    .select('*')
    .eq('id', procedureId)
    .single();

  if (!sop) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white font-sans">
        <h1 className="text-2xl font-bold text-red-500 mb-4">NO PROCEDURE FOUND</h1>
        <Link href="/dashboard" className="text-[#D4AF37] hover:underline mt-6">← Back to Dashboard</Link>
      </div>
    );
  }

  // Check if media is a video
  const isVideo = sop.media_url?.match(/\.(mp4|webm|ogg)$/i);

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
        
        {/* Media Viewer */}
        {sop.media_url && (
          <div className="mb-8 border border-zinc-800 rounded-lg overflow-hidden bg-black flex justify-center">
            {isVideo ? (
              <video controls className="max-w-full max-h-[500px] object-contain">
                <source src={sop.media_url} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={sop.media_url} alt="Procedure visual aid" className="max-w-full max-h-[500px] object-contain" />
            )}
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4 border-b border-zinc-800 pb-2">Procedure Details</h2>
        <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
          {sop.description}
        </p>

        {/* The Digital Andon Cord */}
        <AndonButton sopId={sop.id} sopTitle={sop.title} />

      </main>
    </div>
  );
}