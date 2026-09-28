import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
 
  const course = await prisma.courses.findUnique({
    where: {
      id: "baa436c3-f7cb-4ed5-bd25-d024aea057f5",
    },
  });

  console.log("Curso encontrado pelo ID:", course);
}

main();