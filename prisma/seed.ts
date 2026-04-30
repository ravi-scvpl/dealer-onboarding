import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  // 1. Create Default Brand
  const brand = await prisma.brand.upsert({
    where: { id: 'default-brand' },
    update: {},
    create: {
      id: 'default-brand',
      name: 'Default Brand',
    },
  });
  console.log('Created Brand:', brand.name);

  // 2. Create Test Invite
  const testMobile = '+919999999999';
  const invite = await prisma.dealerInvite.upsert({
    where: { mobileNumber: testMobile },
    update: {},
    create: {
      mobileNumber: testMobile,
      dealerCode: 'TEST001',
      dealerName: 'Test Dealer',
      brandId: brand.id,
      status: 'invited',
    },
  });
  console.log('Created Test Invite for:', invite.mobileNumber);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
