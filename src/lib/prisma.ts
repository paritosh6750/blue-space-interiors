import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

function getDatabaseUrl(): string {
  // If user provided an external cloud DATABASE_URL (e.g. PostgreSQL, Neon, Supabase), use it directly
  if (
    process.env.DATABASE_URL &&
    !process.env.DATABASE_URL.startsWith("file:./dev.db") &&
    !process.env.DATABASE_URL.startsWith("file:dev.db") &&
    !process.env.DATABASE_URL.startsWith("file:")
  ) {
    return process.env.DATABASE_URL;
  }

  // On Vercel / AWS Lambda, the root application directory is read-only.
  // /tmp is the only writable directory on AWS Lambda serverless environments.
  const isServerless = Boolean(
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.LAMBDA_TASK_ROOT
  );

  if (isServerless) {
    const tmpDbPath = path.join("/tmp", "dev.db");

    // Copy bundled seed database to /tmp if not already present
    if (!fs.existsSync(tmpDbPath)) {
      try {
        const bundledDb = path.join(process.cwd(), "prisma", "dev.db");
        if (fs.existsSync(bundledDb)) {
          fs.copyFileSync(bundledDb, tmpDbPath);
        }
      } catch (err) {
        console.error("Error initializing SQLite database in /tmp:", err);
      }
    }

    return `file:${tmpDbPath}`;
  }

  // Local development
  const localDb = path.resolve(process.cwd(), "prisma", "dev.db");
  return `file:${localDb}`;
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: getDatabaseUrl(),
      },
    },
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
