import AdminPanel from './AdminPanel';
import { prisma } from '@/lib/db';

export default async function AdminPage() {
  // In a real app, you'd check if the user is an admin here
  
  const invites = await prisma.dealerInvite.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const submissions = await prisma.storeSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return <AdminPanel invites={invites} submissions={submissions} />;
}
