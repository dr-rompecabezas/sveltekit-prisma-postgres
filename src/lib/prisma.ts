// Load Prisma so that it works in Dev environment as well as Vercel
import Prisma, * as PrismaAll from "@prisma/client";

// One of the two will be undefined in Dev or Vercel and viceversa
const PrismaClient = Prisma?.PrismaClient || PrismaAll?.PrismaClient;
export default PrismaClient;