import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.delete({
    where: {
      id: "cf8746a9-31f4-42f4-8dfb-c5d539e5182d", // O mesmo ID que você atualizou
    },
  });

  console.log("Curso excluído com sucesso:", result);
}

main();