import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { signToken } from "@/lib/admin-auth";

// ─── Rate limiting (in-memory, per IP) ──────────────────────────────────────
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

const attempts = new Map<string, { count: number; resetAt: number }>();

function getIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "127.0.0.1";
}

function isLocked(ip: string): boolean {
  const rec = attempts.get(ip);
  if (!rec) return false;
  if (Date.now() > rec.resetAt) { attempts.delete(ip); return false; }
  return rec.count >= MAX_ATTEMPTS;
}

function recordFailure(ip: string): void {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now > rec.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    rec.count += 1;
  }
}

function resetAttempts(ip: string): void {
  attempts.delete(ip);
}

// ─── Timing-safe password comparison ────────────────────────────────────────
function safeCompare(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a, "utf8");
    const bufB = Buffer.from(b, "utf8");
    if (bufA.length !== bufB.length) {
      // Always run the comparison to avoid leaking length via timing
      timingSafeEqual(bufA, Buffer.alloc(bufA.length));
      return false;
    }
    return timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

// ─── Route handler ───────────────────────────────────────────────────────────
export async function POST(request: Request) {
  const ip = getIp(request);

  if (isLocked(ip)) {
    return NextResponse.json(
      { error: "Too many failed attempts. Try again in 15 minutes." },
      { status: 429 }
    );
  }

  const { password } = await request.json();
  const expected = process.env.ADMIN_PASSWORD ?? "";

  if (!safeCompare(password ?? "", expected)) {
    recordFailure(ip);
    const rec = attempts.get(ip);
    const remaining = Math.max(0, MAX_ATTEMPTS - (rec?.count ?? 0));
    return NextResponse.json(
      { error: `Invalid password. ${remaining} attempt${remaining === 1 ? "" : "s"} remaining.` },
      { status: 401 }
    );
  }

  // Correct password — issue a signed session token (never the password itself)
  resetAttempts(ip);
  const token = await signToken(expected);

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
  return res;
}
