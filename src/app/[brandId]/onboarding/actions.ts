'use server';

import { prisma } from '@/lib/db';
import { analyzeStoreImage, ImageQualityReport } from '@/lib/ai';
import { revalidatePath } from 'next/cache';

/**
 * Server Action to analyze an image using Gemini.
 */
export async function analyzeImageAction(base64Image: string, type: string): Promise<ImageQualityReport> {
  return await analyzeStoreImage(base64Image, type);
}

/**
 * Server Action to submit the onboarding data.
 */
export async function submitOnboardingAction(data: {
  dealerId: string;
  brandId: string;
  storeName: string;
  category: string;
  address: any;
  location: any;
  media: any[];
}) {
  try {
    // 1. Create Submission
    const submission = await prisma.storeSubmission.create({
      data: {
        dealerId: data.dealerId,
        brandId: data.brandId,
        storeName: data.storeName,
        category: data.category,
        address: data.address,
        location: data.location,
        media: data.media,
        status: 'submitted_for_review',
      },
    });

    // 2. Update Dealer Status
    await prisma.dealer.update({
      where: { id: data.dealerId },
      data: {
        onboardingStatus: 'submitted_for_review',
      },
    });

    revalidatePath('/dashboard');
    return { success: true, submissionId: submission.id };
  } catch (error: any) {
    console.error("Submission Error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Server Action to check if a mobile number is invited.
 */
export async function checkInviteAction(mobileNumber: string) {
  const invite = await prisma.dealerInvite.findUnique({
    where: { mobileNumber },
  });
  return !!invite;
}
