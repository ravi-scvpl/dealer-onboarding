export const dynamic = 'force-dynamic';
import OnboardingFlow from './OnboardingFlow';
import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

interface Props {
  params: Promise<{ brandId: string }>;
}

export default async function OnboardingPage({ params }: Props) {
  const { brandId } = await params;
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get('userId');
  
  if (!userIdCookie?.value) {
    redirect(`/${brandId}/login`);
  }

  const user = { id: userIdCookie.value, email: '' }; // Firebase user ID

  // Fetch Dealer Profile from PostgreSQL
  let dealerProfile = await prisma.dealer.findUnique({
    where: { userId: user.id },
  });

  // If the profile exists but the brand doesn't match the current URL context, update it
  if (dealerProfile && dealerProfile.brandId !== brandId && brandId !== 'default-brand') {
    dealerProfile = await prisma.dealer.update({
      where: { id: dealerProfile.id },
      data: { brandId: brandId }
    });
  }

  // If no profile, create one linked to the current brand
  if (!dealerProfile) {
    // Check if we have an invitation for this user's phone (simplified for now)
    // We'll use the brandId from the URL as the definitive source
    
    dealerProfile = await prisma.dealer.create({
      data: {
        userId: user.id,
        mobileNumber: '+91' + Math.floor(1000000000 + Math.random() * 9000000000).toString(),
        dealerCode: 'D' + Math.floor(Math.random() * 10000).toString(),
        brand: {
          connect: { id: brandId }
        },
      }
    });
  }

  if (dealerProfile.onboardingStatus === 'submitted_for_review') {
    redirect('/dashboard');
  }

  return <OnboardingFlow user={user} dealerProfile={dealerProfile} />;
}
