'use client';

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Link from 'next/link';

const BASE_URL = 'https://opsforge-app-beta.vercel.app/dashboard/sop/';

export default function QRGenerator() {
  const [sopId, setSopId] = useState('');
  const [generated, setGenerated] = useState('');

  const handleGenerate = () => {
    if (sopId.trim()) setGenerated(sopId.trim());
  };

  const qrUrl = `${BASE_URL}${generated}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] p-8 font-sans text-white">
      <header className="mb-10 border-b border-[#D4AF37] pb-4 flex justify-between items-end w-full">
        <div>
          <h1 className="text-4xl font-bold text-[#D4AF37] mb-2">QR Code Generator</h1>
          <Link href="/dashboard" className="text-zinc-400 hover:text-white transition">← Back to Dashboard</Link>
        </div>
      </header>

      <main className="flex flex-col items-center gap-8 mt-8">
        <div className="w-full max-w-md flex flex-col gap-4">
          <label className="text-zinc-300 font-medium">SOP ID</label>
          <input
            type="text"
            value={sopId}
            onChange={(e) => setSopId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder="Enter SOP ID..."
            className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition"
          />
          <button
            onClick={handleGenerate}
            disabled={!sopId.trim()}
            className="w-full bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-3 rounded transition disabled:opacity-40"
          >
            Generate
          </button>
        </div>

        {generated && (
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="bg-white p-6 rounded-xl shadow-2xl print:shadow-none">
              <QRCodeSVG value={qrUrl} size={256} />
            </div>
            <p className="text-zinc-400 text-sm text-center break-all max-w-sm">{qrUrl}</p>
            <button
              onClick={() => window.print()}
              className="mt-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold py-2 px-6 rounded transition"
            >
              Print QR Code
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
