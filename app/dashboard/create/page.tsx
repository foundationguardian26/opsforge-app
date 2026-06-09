'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import Link from 'next/link';

export default function CreateProcedure() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let media_url = null;

    // 1. If the user attached a picture/video, upload it to Supabase Storage first
    if (mediaFile) {
      const fileExt = mediaFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`; // Create a unique file name

      const { error: uploadError } = await supabase.storage
        .from('sop-media')
        .upload(fileName, mediaFile);

      if (uploadError) {
        alert('Failed to upload media. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // 2. Grab the public web link for the file we just uploaded
      const { data } = supabase.storage.from('sop-media').getPublicUrl(fileName);
      media_url = data.publicUrl;
    }

    // 3. Save the text AND the new media link to the database
    const { error } = await supabase
      .from('sops')
      .insert([{ title, description, status: 'Active', media_url }]);

    if (error) {
      alert('Failed to save procedure.');
      setIsSubmitting(false);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] p-8 font-sans text-white">
      <header className="mb-10 border-b border-[#D4AF37] pb-4">
        <Link href="/dashboard" className="text-zinc-400 hover:text-white transition inline-block mb-4">← Cancel & Back</Link>
        <h1 className="text-4xl font-bold text-[#D4AF37]">Create New Procedure</h1>
      </header>

      <main className="max-w-2xl bg-zinc-900 border border-zinc-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div>
            <label className="block text-zinc-300 mb-2 font-medium">Procedure Title</label>
            <input 
              type="text" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Mechanical Seal Replacement"
              className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition"
            />
          </div>

          {/* NEW MEDIA UPLOAD BUTTON */}
          <div className="border border-dashed border-zinc-700 p-6 rounded text-center bg-zinc-800/50 hover:bg-zinc-800 transition cursor-pointer">
            <label className="block text-[#D4AF37] font-medium cursor-pointer">
              + Attach Tool Picture or Operation Video
              <input 
                type="file" 
                accept="image/*,video/*"
                onChange={(e) => setMediaFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
            {mediaFile && <p className="text-sm text-zinc-400 mt-2">Attached: {mediaFile.name}</p>}
          </div>

          <div>
            <label className="block text-zinc-300 mb-2 font-medium">Standard Operating Procedure</label>
            <textarea 
              required
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detail the exact steps required..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition resize-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-[#D4AF37] text-black font-bold py-3 rounded hover:bg-yellow-500 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Uploading & Saving...' : 'Save & Publish Procedure'}
          </button>
        </form>
      </main>
    </div>
  );
}