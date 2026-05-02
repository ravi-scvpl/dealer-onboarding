export const dynamic = 'force-dynamic';
import React from 'react';
import { prisma } from '@/lib/db';
import { Layout } from '@/components/Layout';
import { CheckCircle, Home } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ brandId: string }>;
}

export default async function ThankYouPage({ params }: Props) {
  const { brandId } = await params;

  const brand = await prisma.brand.findUnique({
    where: { id: brandId },
  });

  if (!brand) {
    notFound();
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-md mx-auto px-4">

        {brand.logo ? (
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-20 min-w-[80px] bg-slate-50 rounded-lg mb-8 object-contain"
          />
        ) : (
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-8 border border-emerald-100">
            <CheckCircle size={40} className="text-emerald-500" />
          </div>
        )}

        <h1 className="text-3xl font-black text-slate-900 mb-4">
          Thank You!
        </h1>

        <p className="text-slate-600 mb-8 leading-relaxed">
          Your store details have been successfully submitted. We will review your application and process your Google Business Profile listing for <span className="font-bold text-slate-800">{brand.name}</span>.
        </p>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 w-full">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">What's Next?</h3>
          <p className="text-sm text-slate-600">
            Our verification team will review your photos and details. You will be notified once your profile is live and optimized on Google Maps.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="btn-primary w-full py-4 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
        >
          <Home size={18} />
          Go to Dashboard
        </Link>
      </div>
    </Layout>
  );
}
