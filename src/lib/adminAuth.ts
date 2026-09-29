import crypto from "crypto";
import { cookies } from "next/headers";

export const ADMIN_USERNAME = "admin_bsi";
export const ADMIN_PASSWORD = "bsi@123";

const AUTH_SECRET = process.env.ADMIN_AUTH_SECRET || "blue-space-interiors-thane-admin-secret-2026";
const COOKIE_NAME = "bsi_admin_session";

export function verifyCredentials(u: string, p: string): boolean {
  return u.trim() === ADMIN_USERNAME && p === ADMIN_PASSWORD;
}

export function generateToken(): string {
  const payload = JSON.stringify({
    user: ADMIN_USERNAME,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  const signature = crypto.createHmac("sha256", AUTH_SECRET).update(payload).digest("hex");
  return `${Buffer.from(payload).toString("base64")}.${signature}`;
}

export function verifyToken(token: string): boolean {
  try {
    const [b64, signature] = token.split(".");
    if (!b64 || !signature) return false;
    const payload = Buffer.from(b64, "base64").toString("utf-8");
    const expectedSig = crypto.createHmac("sha256", AUTH_SECRET).update(payload).digest("hex");
    if (signature !== expectedSig) return false;
    const data = JSON.parse(payload);
    if (Date.now() > data.exp) return false;
    return data.user === ADMIN_USERNAME;
  } catch {
    return false;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return false;
    return verifyToken(token);
  } catch {
    return false;
  }
}

export async function setAdminSession() {
  const token = generateToken();
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
