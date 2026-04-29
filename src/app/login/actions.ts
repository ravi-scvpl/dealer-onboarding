'use server';

import { prisma } from '@/lib/db';

export async function checkInvitationAction(phoneNumber: string) {
  try {
    // Search for the mobile number in the DealerInvite table
    const invite = await prisma.dealerInvite.findUnique({
      where: {
        mobileNumber: phoneNumber,
      },
    });

    if (!invite) {
      return { success: false, error: 'You are not on the invited dealers list.' };
    }

    if (invite.status === 'expired') {
      return { success: false, error: 'Your invitation has expired. Please contact support.' };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error checking invitation:', error);
    return { success: false, error: 'An error occurred while verifying your invitation.' };
  }
}
