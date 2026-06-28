import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login page is always accessible
  if (pathname === "/admin/login") return NextResponse.next();

  const token = request.cookies.get("admin_token")?.value;
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || token !== expected) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
