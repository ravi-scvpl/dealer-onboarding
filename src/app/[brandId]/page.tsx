import { prisma } from '@/lib/db';
import { notFound, redirect } from 'next/navigation';
import { cookies } from 'next/headers';

interface Props {
  params: Promise<{ brandId: string }>;
}

export default async function BrandEntryPage({ params }: Props) {
  const { brandId } = await params;

  // 1. Verify Brand exists
  const brand = await prisma.brand.findUnique({
    where: { id: brandId },
  });

  if (!brand) {
    notFound();
  }

  // 3. Redirect to brand-specific login
  redirect(`/${brandId}/login`);
}
