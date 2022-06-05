import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: 'Post 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nisi et odio eleifend mollis. Fusce lacinia vehicula mattis. Cras eget',
    },
  });
  await prisma.post.create({
    data: {
      title: 'Post 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nisi et odio eleifend mollis. Fusce lacinia vehicula mattis. Cras eget',
    },
  });
  await prisma.post.create({
    data: {
      title: 'Post 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nisi et odio eleifend mollis. Fusce lacinia vehicula mattis. Cras eget',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
