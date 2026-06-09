import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] p-8 font-sans text-white">
      <header className="mb-10 border-b border-[#D4AF37] pb-4 flex justify-between items-end">
        <h1 className="text-4xl font-bold text-[#D4AF37]">OpsForge Dashboard</h1>
        <Link href="/" className="text-zinc-400 hover:text-white transition">← Back Home</Link>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-white">Active Procedures</h2>
          <p className="text-zinc-400 mb-4">Manage and review your standard operating procedures.</p>
          <button className="text-[#D4AF37] hover:underline font-medium">View SOPs →</button>
        </div>
      </main>
    </div>
  );
}
