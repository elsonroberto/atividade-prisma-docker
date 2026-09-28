import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de CSS",
      duration: 50,
      description: "Curso top de CSS",
      fk_id_teacher: "8d0c3cce-626d-48cf-bcf3-7ef6ab82fec0",
    },
  });

  console.log(result);
}

main();