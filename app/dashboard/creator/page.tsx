'use client';

import { useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Status = 'idle' | 'loading' | 'done' | 'error';

export default function SOPCreatorPage() {
  const [transcript, setTranscript] = useState('');
  const [sop, setSop] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleGenerate = async () => {
    if (!transcript.trim()) return;
    setStatus('loading');
    setSop('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/generate-sop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMsg(data.error ?? 'Generation failed.');
        setStatus('error');
      } else {
        setSop(data.sop);
        setStatus('done');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-8">
      <header className="mb-8 border-b border-[#D4AF37] pb-4">
        <Link href="/dashboard" className="text-zinc-400 hover:text-white transition inline-block mb-3">
          ← Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold text-[#D4AF37]">SOP Authoring Engine</h1>
        <p className="text-zinc-400 text-sm mt-1 uppercase tracking-widest">AI-Powered TWI Job Instruction Generator</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">

        {/* ── Left Column: Input ── */}
        <div className="flex flex-col gap-4">
          <label className="text-zinc-300 font-bold uppercase tracking-widest text-sm">
            Paste Raw Transcript or Notes Here
          </label>
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            rows={20}
            placeholder="Paste operator observations, video transcripts, or rough notes here. The engine will structure them into a TWI Job Instruction sheet..."
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition resize-none text-sm leading-relaxed"
          />
          <button
            onClick={handleGenerate}
            disabled={status === 'loading' || !transcript.trim()}
            className="w-full bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-4 rounded-lg uppercase tracking-widest transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {status === 'loading' ? 'Generating...' : 'Generate SOP'}
          </button>
        </div>

        {/* ── Right Column: Output ── */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 min-h-[500px] flex flex-col">
          {status === 'idle' && (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center">
              <div className="text-4xl opacity-30">📋</div>
              <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold">
                Awaiting Transcript...
              </p>
              <p className="text-zinc-700 text-xs max-w-xs">
                Paste your notes on the left and click Generate SOP to produce a formatted TWI Job Instruction sheet.
              </p>
            </div>
          )}

          {status === 'loading' && (
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="w-10 h-10 border-4 border-zinc-700 border-t-[#D4AF37] rounded-full animate-spin" />
              <p className="text-zinc-400 uppercase tracking-widest text-xs animate-pulse">
                Structuring Job Instruction...
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="flex-1 flex flex-col items-center justify-center gap-3">
              <div className="bg-red-950 border border-red-600 text-red-400 p-4 rounded-lg text-sm font-bold text-center w-full">
                {errorMsg}
              </div>
            </div>
          )}

          {status === 'done' && (
            <div className="overflow-auto sop-output">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{sop}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
