'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function adminOtpLoginAction(phoneNumber: string) {
  try {
    const admin = await prisma.adminUser.findUnique({
      where: { mobileNumber: phoneNumber }
    });

    if (admin) {
      const cookieStore = await cookies();
      cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 1 day
      });
      return { success: true };
    }
    return { success: false, error: 'Unauthorized: Mobile number not found in admin list.' };
  } catch (error) {
    return { success: false, error: 'Authentication failed' };
  }
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
  brandId: string;
}) {
  try {
    await prisma.dealerInvite.create({
      data: {
        mobileNumber: data.mobileNumber,
        dealerName: data.dealerName,
        dealerCode: data.dealerCode || 'D' + Math.floor(Math.random() * 1000),
        brandId: data.brandId,
        status: 'invited',
      },
    });
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function bulkInviteAction(
  dealers: { mobileNumber: string; dealerName: string; dealerCode?: string }[],
  brandId: string
) {
  try {
    // Process data to ensure dealer codes exist
    const data = dealers.map(d => ({
      mobileNumber: d.mobileNumber.startsWith('+') ? d.mobileNumber : `+91${d.mobileNumber}`,
      dealerName: d.dealerName,
      dealerCode: d.dealerCode || 'D' + Math.floor(Math.random() * 1000000),
      brandId: brandId,
      status: 'invited',
    }));

    // We use a transaction or loop for createMany as it's more robust with SQLite/Neon sometimes
    // But since this is likely Postgres on Neon, createMany is fine.
    // However, to handle duplicates gracefully (skip existing), we might want to do it in a loop or use skipDuplicates if supported.
    await prisma.dealerInvite.createMany({
      data: data,
      skipDuplicates: true,
    });

    revalidatePath('/admin');
    return { success: true, count: data.length };
  } catch (error: any) {
    console.error("Bulk Invite Error:", error);
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

export async function addBrandAction(data: any) {
  try {
    await prisma.brand.create({
      data: {
        id: data.id,
        name: data.name,
        logo: data.logo,
        address: data.address,
        contactNumber: data.contactNumber,
        email: data.email,
        websiteUrl: data.websiteUrl,
        category: data.category,
        contactPersonName: data.contactPersonName,
        billingAddress: data.billingAddress,
        taxId: data.taxId,
      },
    });
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateBrandAction(id: string, data: any) {
  try {
    await prisma.brand.update({
      where: { id },
      data: {
        name: data.name,
        logo: data.logo,
        address: data.address,
        contactNumber: data.contactNumber,
        email: data.email,
        websiteUrl: data.websiteUrl,
        category: data.category,
        contactPersonName: data.contactPersonName,
        billingAddress: data.billingAddress,
        taxId: data.taxId,
      },
    });
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteBrandAction(id: string) {
  try {
    await prisma.brand.delete({
      where: { id },
    });
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
