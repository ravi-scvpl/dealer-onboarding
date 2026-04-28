import OnboardingFlow from './OnboardingFlow';
import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function OnboardingPage() {
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get('userId');
  
  if (!userIdCookie?.value) {
    redirect('/login');
  }

  const user = { id: userIdCookie.value, email: '' }; // Firebase user ID

  // Fetch Dealer Profile from PostgreSQL
  let dealerProfile = await prisma.dealer.findUnique({
    where: { userId: user.id },
  });

  // If no profile, create a default one (similar to the original logic that checks invites)
  if (!dealerProfile) {
    // In a real app, you'd check dealerInvites table here.
    // For the demo, we'll auto-create one.
    dealerProfile = await prisma.dealer.create({
      data: {
        userId: user.id,
        mobileNumber: '+919999004538',
        dealerCode: 'MOCK-123',
        brand: {
          connectOrCreate: {
            where: { id: 'default-brand' },
            create: { id: 'default-brand', name: 'Default Brand' }
          }
        },
      }
    });
  }

  if (dealerProfile.onboardingStatus === 'submitted_for_review') {
    redirect('/dashboard');
  }

  return <OnboardingFlow user={user} dealerProfile={dealerProfile} />;
}
