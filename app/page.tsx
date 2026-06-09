import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] items-center justify-center font-sans text-white">
      {/* Title Area */}
      <h1 className="text-6xl font-extrabold text-[#D4AF37] mb-6 tracking-tight">
        OpsForge
      </h1>
      
      {/* Subtitle */}
      <p className="text-xl text-zinc-400 mb-10">
        Industrial Operations Portal
      </p>

      {/* Primary Action Button */}
      <Link 
        href="/dashboard" 
        className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121212] px-8 py-3 rounded-md font-bold text-lg transition duration-300"
      >
        Access Dashboard
      </Link>
    </div>
  );
}