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

  // If no profile, create one linked to the selected brand
  if (!dealerProfile) {
    const selectedBrandId = brandId || cookieStore.get('selected_brand_id')?.value || 'default-brand';
    
    // Check if we have an invitation for this user
    // (This is a simplified version of the check invitation logic)
    
    dealerProfile = await prisma.dealer.create({
      data: {
        userId: user.id,
        mobileNumber: '+91' + Math.floor(1000000000 + Math.random() * 9000000000).toString(),
        dealerCode: 'D' + Math.floor(Math.random() * 10000).toString(),
        brand: {
          connect: { id: selectedBrandId }
        },
      }
    });
  }

  if (dealerProfile.onboardingStatus === 'submitted_for_review') {
    redirect('/dashboard');
  }

  return <OnboardingFlow user={user} dealerProfile={dealerProfile} />;
}
