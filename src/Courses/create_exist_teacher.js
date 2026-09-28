import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Prisma",
      duration: 50,
      description: "Curso sobre como utilizar ORM Prisma.js",
      teacher: {
        connect: {
          id: "17883259-302d-41ea-a723-21a72a31c195",
        },
      },
    },
  });

  console.log(result);
}

main();