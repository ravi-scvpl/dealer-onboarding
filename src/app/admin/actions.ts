'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function adminLoginAction(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 day
    });
    return { success: true };
  }
  return { success: false, error: 'Invalid credentials' };
}

export async function adminLogoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  revalidatePath('/admin');
}

export async function addInviteAction(data: {
  mobileNumber: string;
  dealerName: string;
  dealerCode?: string;
}) {
  try {
    await prisma.dealerInvite.create({
      data: {
        mobileNumber: data.mobileNumber,
        dealerName: data.dealerName,
        dealerCode: data.dealerCode || 'D' + Math.floor(Math.random() * 1000),
        brand: {
          connectOrCreate: {
            where: { id: 'default-brand' },
            create: { id: 'default-brand', name: 'Default Brand' }
          }
        },
        status: 'invited',
      },
    });
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateSubmissionStatusAction(
  subId: string,
  dealerId: string,
  status: string
) {
  try {
    await prisma.storeSubmission.update({
      where: { id: subId },
      data: { status },
    });
    await prisma.dealer.update({
      where: { id: dealerId },
      data: { onboardingStatus: status },
    });
    revalidatePath('/admin');
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
