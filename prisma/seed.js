const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const users = [
    {
        name: "Javier",
        username: "jav_user",
        password: "OjfApzRcpa4FdPS",
        email: "javier@mail.com"
    },
    {
        name: "Alfonso",
        username: "alf_user",
        password: "CyR9Z9E8VMEPUlP",
        email: "alfonso@mail.com"
    },
    {
        name: "Maria",
        username: "mar_user",
        password: "O4w5OGecRzTAurq5",
        email: "maria@mail.com"
    },
    {
        name: "Alejandra",
        username: "ale_user",
        password: "V4PKn2HIC7UTuLq",
        email: "alejandra@mail.com"
    },
    {
        name: "Claudio",
        username: "cla_user",
        password: "A7NW4KxAVgUxm2y",
        email: "claudio@mail.com"
    },
]

async function main() {

    await prisma.user.createMany({
        data: [...users]
    })

}

main().catch(error => {
	console.log(error);
	process.exit(1);
}).finally(() => {
	prisma.$disconnect;
})