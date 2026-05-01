'use server';

import { prisma } from '@/lib/db';

export async function checkInvitationAction(phoneNumber: string, brandId: string) {
  try {
    // 1. Check if they are already an onboarded Dealer for this brand
    const existingDealer = await prisma.dealer.findUnique({
      where: { mobileNumber: phoneNumber },
      include: { brand: true }
    });

    if (existingDealer) {
      if (existingDealer.brandId !== brandId) {
        return {
          success: false,
          error: `This number is registered with ${existingDealer.brand.name}. Please use the correct brand URL.`
        };
      }
      return { success: true }; // Existing dealer for this brand
    }

    // 2. Search for the mobile number in the DealerInvite table
    const invite = await prisma.dealerInvite.findUnique({
      where: { mobileNumber: phoneNumber },
    });

    if (!invite || invite.brandId !== brandId) {
      return { success: false, error: 'You do not have an active invitation for this brand.' };
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

export async function getBrandDetailsAction(brandId: string) {
  try {
    const brand = await prisma.brand.findUnique({
      where: { id: brandId },
      select: { name: true, logo: true }
    });
    return { success: true, brand };
  } catch (error) {
    console.error('Error fetching brand:', error);
    return { success: false, error: 'Failed to fetch brand details' };
  }
}
