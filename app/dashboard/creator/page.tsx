'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import VideoTimeStudyUploader from '../../components/VideoTimeStudyUploader';

type GenerateStatus = 'idle' | 'loading' | 'done' | 'error';
type PublishStatus = 'idle' | 'publishing' | 'error';

export default function SOPCreatorPage() {
  const [transcript, setTranscript] = useState('');
  const [sop, setSop] = useState('');
  const [generateStatus, setGenerateStatus] = useState<GenerateStatus>('idle');
  const [publishStatus, setPublishStatus] = useState<PublishStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [publishError, setPublishError] = useState('');
  const [toast, setToast] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [micError, setMicError] = useState('');
  const recognitionRef = useRef<any>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  }, []);

  const startListening = () => {
    setMicError('');
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setMicError('Voice dictation is not supported on this browser. Please try Chrome, Edge, or Safari.');
      return;
    }
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
      }
      if (finalTranscript) setTranscript((prev) => prev ? prev + ' ' + finalTranscript : finalTranscript);
    };
    recognition.onerror = (event: any) => {
      if (event.error === 'not-allowed') {
        setMicError('Microphone blocked. If you are using Brave, please switch to Chrome or Edge.');
      } else if (event.error === 'network') {
        setMicError('Network error. Voice recognition requires an active internet connection.');
      } else if (event.error !== 'no-speech') {
        setMicError(`Mic Error: ${event.error}. Please type manually.`);
      }
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);
    try { recognition.start(); } catch (e) { console.error('Failed to start recognition', e); }
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const handleGenerate = async () => {
    if (!transcript.trim()) return;
    setGenerateStatus('loading');
    setSop('');
    setErrorMsg('');
    setPublishStatus('idle');
    setPublishError('');

    try {
      const res = await fetch('/api/generate-sop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMsg(data.error ?? 'Generation failed.');
        setGenerateStatus('error');
      } else {
        setSop(data.sop);
        setGenerateStatus('done');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setGenerateStatus('error');
    }
  };

  const handlePublish = async () => {
    if (!sop) return;
    setPublishStatus('publishing');
    setPublishError('');

    try {
      const res = await fetch('/api/publish-sop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: sop }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setPublishError(data.error ?? 'Publish failed.');
        setPublishStatus('error');
      } else {
        showToast(`"${data.title}" published to floor!`);
        setTranscript('');
        setSop('');
        setGenerateStatus('idle');
        setPublishStatus('idle');
      }
    } catch {
      setPublishError('Network error. Please try again.');
      setPublishStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-8">

      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-green-950 border border-green-500 text-green-400 font-bold py-3 px-5 rounded-lg shadow-2xl text-sm uppercase tracking-widest">
          ✓ {toast}
        </div>
      )}

      <header className="mb-8 border-b border-[#D4AF37] pb-4">
        <Link href="/dashboard" className="text-zinc-400 hover:text-white transition inline-block mb-3">
          ← Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold text-[#D4AF37]">SOP Authoring Engine</h1>
        <p className="text-zinc-400 text-sm mt-1 uppercase tracking-widest">AI-Powered TWI Job Instruction Generator</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ── Left Column: Input ── */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <label className="text-zinc-300 font-bold uppercase tracking-widest text-sm">
              Paste Raw Transcript or Notes Here
            </label>
            <button
              type="button"
              onClick={isListening ? stopListening : startListening}
              className={`px-4 py-2 rounded font-bold text-sm transition flex items-center gap-2 shadow-lg ${
                isListening
                  ? 'bg-[#E50000] text-white animate-pulse border border-red-400'
                  : 'bg-[#D4AF37] text-black hover:bg-yellow-500'
              }`}
            >
              {isListening ? '🛑 Stop Recording' : '🎤 Tap to Speak'}
            </button>
          </div>
          {micError && (
            <div className="bg-red-950 border border-red-500 text-red-400 p-2 rounded text-xs font-bold">
              {micError}
            </div>
          )}
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            rows={20}
            placeholder="Paste operator observations, video transcripts, or rough notes here. The engine will structure them into a TWI Job Instruction sheet..."
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition resize-none text-sm leading-relaxed"
          />
          <button
            onClick={handleGenerate}
            disabled={generateStatus === 'loading' || !transcript.trim()}
            className="w-full bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-4 rounded-lg uppercase tracking-widest transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {generateStatus === 'loading' ? 'Generating...' : 'Generate SOP'}
          </button>
        </div>

        {/* ── Right Column: Output ── */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 min-h-[500px] flex flex-col gap-4">

          {generateStatus === 'idle' && (
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

          {generateStatus === 'loading' && (
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="w-10 h-10 border-4 border-zinc-700 border-t-[#D4AF37] rounded-full animate-spin" />
              <p className="text-zinc-400 uppercase tracking-widest text-xs animate-pulse">
                Structuring Job Instruction...
              </p>
            </div>
          )}

          {generateStatus === 'error' && (
            <div className="flex-1 flex flex-col items-center justify-center gap-3">
              <div className="bg-red-950 border border-red-600 text-red-400 p-4 rounded-lg text-sm font-bold text-center w-full">
                {errorMsg}
              </div>
            </div>
          )}

          {generateStatus === 'done' && (
            <>
              <div className="overflow-auto sop-output flex-1">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{sop}</ReactMarkdown>
              </div>

              <div className="border-t border-zinc-800 pt-4 flex flex-col gap-2">
                {publishError && (
                  <div className="bg-red-950 border border-red-600 text-red-400 p-3 rounded-lg text-xs font-bold">
                    {publishError}
                  </div>
                )}
                <button
                  onClick={handlePublish}
                  disabled={publishStatus === 'publishing'}
                  className="w-full bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-4 rounded-lg uppercase tracking-widest transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {publishStatus === 'publishing' ? 'Publishing...' : '🏭 Publish to Floor'}
                </button>
              </div>
            </>
          )}

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 h-px bg-zinc-800" />
        <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">or</span>
        <div className="flex-1 h-px bg-zinc-800" />
      </div>

      {/* ── Video Time Study Section ── */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-[#D4AF37]">Automated Time Study</h2>
          <p className="text-zinc-500 text-sm mt-1 uppercase tracking-widest">
            Upload a process video — AI extracts frames and generates a TWI Job Element Sheet
          </p>
        </div>
        <VideoTimeStudyUploader />
      </section>

    </div>
  );
}
