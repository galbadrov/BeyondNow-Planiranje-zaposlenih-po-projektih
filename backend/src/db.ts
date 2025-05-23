import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

(async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
})();
