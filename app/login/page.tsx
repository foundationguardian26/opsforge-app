'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import { useOperator } from '../context/OperatorContext';
import Link from 'next/link';
import NFCLogin from '../components/NFCLogin';

interface OperatorProfile {
  id: string;
  full_name: string;
  role: string;
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isBypassing, setIsBypassing] = useState(false);
  const [bypassError, setBypassError] = useState<string | null>(null);
  const router = useRouter();
  const { setActiveOperator } = useOperator();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push('/dashboard');
    }
    setIsSubmitting(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push('/dashboard');
    }
    setIsSubmitting(false);
  };

  const handleDevBypass = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsBypassing(true);
    setBypassError(null);

    const { data: profile, error: dbError } = await supabase
      .from('profiles')
      .select('id, full_name, role')
      .limit(1)
      .single();

    if (dbError || !profile) {
      setBypassError('No operator profiles found. Add a row to the profiles table first.');
      setIsBypassing(false);
      return;
    }

    const p = profile as OperatorProfile;
    setActiveOperator({ id: p.id, full_name: p.full_name, role: p.role });
    router.push('/dashboard/station');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] p-8 font-sans text-white">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-lg shadow-2xl">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#D4AF37] mb-2">OpsForge</h1>
          <p className="text-zinc-400">Secure Operations Portal</p>
        </div>

        {errorMsg && (
          <div className="bg-red-950 border border-red-500 text-red-500 p-3 rounded mb-6 text-sm">
            {errorMsg}
          </div>
        )}

        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-zinc-300 mb-2 font-medium text-sm">Corporate Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition"
              placeholder="admin@opsforge.com"
            />
          </div>

          <div>
            <label className="block text-zinc-300 mb-2 font-medium text-sm">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition"
              placeholder="••••••••"
            />
          </div>

          <div className="flex gap-4 mt-2">
            <button
              type="submit"
              onClick={handleSignIn}
              disabled={isSubmitting}
              className="w-full bg-[#D4AF37] text-black font-bold py-3 rounded hover:bg-yellow-500 transition disabled:opacity-50"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={handleSignUp}
              disabled={isSubmitting}
              className="w-full bg-zinc-800 text-white font-bold py-3 rounded hover:bg-zinc-700 border border-zinc-700 transition disabled:opacity-50"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-sm transition">← Back to Homepage</Link>
        </div>

        <div className="mt-8 border-t border-zinc-700 pt-8">
          <p className="text-zinc-500 text-xs uppercase tracking-widest text-center mb-4">
            Or tap your badge
          </p>
          <NFCLogin />

          <div className="mt-4 text-center flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={handleDevBypass}
              disabled={isBypassing}
              className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition disabled:opacity-50"
            >
              {isBypassing ? 'Loading...' : 'Simulate Badge Tap (Dev Mode)'}
            </button>
            {bypassError && (
              <p className="text-red-400 text-xs">{bypassError}</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
