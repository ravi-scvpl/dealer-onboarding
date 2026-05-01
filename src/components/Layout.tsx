'use client';

import React from 'react';
import { LogOut } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { destroyCookie } from 'nookies';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  // MOCK AUTH FOR NOW - Will integrate with NextAuth later
  const user = { email: 'sangeetjass@gmail.com' };

  const params = useParams();
  const brandId = params?.brandId as string;

  const handleLogout = async () => {
    try {
      // 1. Sign out from Firebase
      await signOut(auth);
      
      // 2. Clear the userId cookie
      destroyCookie(null, 'userId', { path: '/' });
      
      // 3. Redirect to brand landing page
      if (brandId) {
        router.push(`/${brandId}`);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error("Logout failed:", error);
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm px-6">
        <div className="max-w-5xl mx-auto h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-indigo-950">Dottt <span className="text-indigo-600">Hyperlocal</span></h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Dealer Onboarding Portal</p>
            </div>
          </Link>

          {user && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleLogout}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-[11px] font-medium">
          <p className="opacity-60 order-2 md:order-1">Powered by <strong>Dottt Hyperlocal Engine</strong></p>
          
          <div className="flex items-center gap-6 order-1 md:order-2">
            {user?.email === 'sangeetjass@gmail.com' && (
              <Link
                href="/admin"
                className="text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl font-bold uppercase tracking-widest hover:bg-indigo-100 transition-colors"
              >
                Admin Panel
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};
