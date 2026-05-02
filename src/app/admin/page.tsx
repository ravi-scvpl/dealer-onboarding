export const dynamic = 'force-dynamic';
import AdminPanel from './AdminPanel';
import AdminLogin from './AdminLogin';
import { prisma } from '@/lib/db';
import { cookies } from 'next/headers';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_session')?.value === 'authenticated';

  // Seed Admin if not exists
  const adminPhone = '+917777777777';
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { mobileNumber: adminPhone }
  });

  if (!existingAdmin) {
    await prisma.adminUser.create({
      data: {
        mobileNumber: adminPhone,
        role: 'admin'
      }
    });
  }

  if (!isAuthenticated) {
    return <AdminLogin />;
  }
  
  const invites = await prisma.dealerInvite.findMany({
    orderBy: { createdAt: 'desc' },
    include: { brand: true }
  });

  const submissions = await prisma.storeSubmission.findMany({
    orderBy: { createdAt: 'desc' },
    include: { 
      dealer: {
        include: { brand: true }
      }
    }
  });

  const brands = await prisma.brand.findMany({
    orderBy: { name: 'asc' }
  });

  return (
    <AdminPanel 
      invites={invites} 
      submissions={submissions} 
      brands={brands}
    />
  );
}
