import { redirect } from 'next/navigation';
import { prisma } from '@/lib/db';

export default async function Home() {
  // MOCK USER
  const user = { id: 'mock-user-id' };

  const dealerProfile = await prisma.dealer.findUnique({
    where: { userId: user.id },
  });

  if (!dealerProfile || dealerProfile.onboardingStatus === 'profile_incomplete') {
    redirect('/onboarding');
  } else {
    redirect('/dashboard');
  }
}
