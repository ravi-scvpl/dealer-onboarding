import { Layout } from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Dealer Onboarding Portal</h1>
        <p className="text-slate-500 mb-8 max-w-md">
          Welcome to the Dottt Hyperlocal Engine. Please use your brand-specific URL to begin onboarding.
        </p>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-400 text-xs font-mono">
          Example: domain.com/your-brand-id
        </div>
      </div>
    </Layout>
  );
}
