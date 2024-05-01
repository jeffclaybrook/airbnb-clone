import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
 return new PrismaClient()
}

declare global {
 var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_END !== "production") globalThis.prisma = prisma