import AdminPanel from './AdminPanel';
import AdminLogin from './AdminLogin';
import { prisma } from '@/lib/db';
import { cookies } from 'next/headers';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_session')?.value === 'authenticated';

  if (!isAuthenticated) {
    return <AdminLogin />;
  }
  
  const invites = await prisma.dealerInvite.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const submissions = await prisma.storeSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return <AdminPanel invites={invites} submissions={submissions} />;
}
