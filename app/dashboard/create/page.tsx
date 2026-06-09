'use client'; // This tells Next.js this page handles user interaction (typing, clicking)

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import Link from 'next/link';

export default function CreateProcedure() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send the typed data to your Supabase database
    const { error } = await supabase
      .from('sops')
      .insert([{ title, description, status: 'Active' }]);

    if (error) {
      console.error(error);
      alert('Failed to save procedure.');
      setIsSubmitting(false);
    } else {
      // If successful, automatically route back to the dashboard and refresh the data
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
              placeholder="e.g., Daily Equipment Checklist"
              className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition"
            />
          </div>

          <div>
            <label className="block text-zinc-300 mb-2 font-medium">Standard Operating Procedure</label>
            <textarea 
              required
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detail the exact steps required for this procedure..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition resize-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-[#D4AF37] text-black font-bold py-3 rounded hover:bg-yellow-500 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Saving Procedure...' : 'Save & Publish Procedure'}
          </button>
        </form>
      </main>
    </div>
  );
}