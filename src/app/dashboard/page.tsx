export const dynamic = 'force-dynamic';
import React from 'react';
import { prisma } from '@/lib/db';
import { 
  Building, CheckCircle, Clock, MapPin, 
  TrendingUp, PhoneCall, Navigation, 
  Eye, HelpCircle, ArrowRight
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default async function DashboardPage() {
  // MOCK USER
  const user = { id: 'mock-user-id', name: 'Aman' };

  const dealerProfile = await prisma.dealer.findUnique({
    where: { userId: user.id },
    include: { submissions: { orderBy: { createdAt: 'desc' }, take: 1 } }
  });

  if (!dealerProfile || dealerProfile.onboardingStatus === 'profile_incomplete') {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 bg-accent/5 rounded-full flex items-center justify-center text-accent mb-6 animate-pulse">
                <Building size={40} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Onboarding Not Started</h1>
            <p className="text-slate-500 mb-8 max-w-sm">
                Complete your profile to get listed on Google Business Profile and grow your local presence.
            </p>
            <Link 
                href="/onboarding"
                className="btn-primary w-full max-w-xs shadow-lg shadow-accent/20 bg-accent hover:bg-accent/90"
            >
                Start Onboarding
            </Link>
        </div>
      </Layout>
    );
  }

  const submission = dealerProfile.submissions[0];

  const statusMap = {
    'submitted_for_review': { 
        label: 'Under Review', 
        color: 'text-amber-600 bg-amber-50', 
        icon: <Clock size={16} />,
        desc: 'Our team is verifying your store data and location.'
    },
    'approved': { 
        label: 'Verified', 
        color: 'text-green-600 bg-green-50', 
        icon: <CheckCircle size={16} />,
        desc: 'Data verified. GMB listing creation in progress.' 
    },
    'gmb_live': { 
        label: 'Live on Google', 
        color: 'text-blue-600 bg-blue-50', 
        icon: <CheckCircle size={16} />,
        desc: 'Congratulations! Your store is now live on Google Maps.'
    },
    'rejected_or_needs_changes': { 
        label: 'Action Required', 
        color: 'text-red-600 bg-red-50', 
        icon: <HelpCircle size={16} />,
        desc: 'Please check comments and resubmit profile.'
    }
  };

  const status = statusMap[dealerProfile.onboardingStatus as keyof typeof statusMap] || statusMap.submitted_for_review;

  return (
    <Layout>
      <div className="space-y-8">
        <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Hello, {dealerProfile.name || user.name}</h1>
            <p className="text-sm text-slate-500">{submission?.storeName || 'Dealer Dashboard'}</p>
        </div>

        {/* Status Banner */}
        <div className={cn("p-4 rounded-2xl flex items-start gap-4", status.color)}>
            <div className="mt-1">{status.icon}</div>
            <div className="flex-1">
                <p className="font-bold text-sm leading-tight">{status.label}</p>
                <p className="text-xs opacity-80 mt-1 leading-relaxed">{status.desc}</p>
            </div>
            {dealerProfile.onboardingStatus === 'rejected_or_needs_changes' && (
                <Link 
                  href="/onboarding"
                  className="p-2 bg-white/20 rounded-lg"
                >
                    <ArrowRight size={16} />
                </Link>
            )}
        </div>

        <div className="space-y-4">
            <div className="card-premium">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-accent" /> Submission Details
                </h3>
                {submission ? (
                  <div className="space-y-4 text-sm">
                      <div className="flex justify-between">
                          <span className="text-slate-400">Store Name</span>
                          <span className="font-medium text-slate-700">{submission.storeName}</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-slate-400">Locality</span>
                          <span className="font-medium text-slate-700">{(submission.address as any).locality}</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-slate-400">Coordinates</span>
                          <span className="font-mono text-slate-700">{(submission.location as any).lat.toFixed(4)}, {(submission.location as any).lng.toFixed(4)}</span>
                      </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">No submission found.</p>
                )}
            </div>

            <div className="p-6 bg-white rounded-2xl border border-dashed border-slate-200 text-center">
                <Building className="mx-auto text-slate-200 mb-2" size={32} />
                <p className="text-xs text-slate-400 font-medium">Dashboard insights will be available once your GMB profile goes live.</p>
            </div>
        </div>

        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-widest px-1">
            <span>Recent Activity</span>
        </div>

        <div className="space-y-3">
            {[
                { title: 'OTP Verified', time: 'Recently', status: 'Success' },
                { title: 'Profile Submitted', time: submission ? 'Recently' : 'Not started', status: submission ? 'Pending' : 'N/A' },
            ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-50">
                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                    <div className="flex-1">
                        <p className="text-sm font-bold text-slate-700 leading-none">{activity.title}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{activity.time}</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300">{activity.status}</span>
                </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
