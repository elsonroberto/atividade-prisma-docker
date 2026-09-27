import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "cf8746a9-31f4-42f4-8dfb-c5d539e5182d"
        },
        data:{
            duration: 1000,
            name: "Curso de React na Unitins",
            description: "Curso preparatorio",
        }
        
    });


    console.log(result);

}

main();