import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const wholesalePortalEnabled = process.env.NEXT_PUBLIC_ENABLE_WHOLESALE_PORTAL === "true"
const isProduction = process.env.NODE_ENV === "production"

const wholesaleMockPaths = ["/auth/login", "/auth/sign-up", "/auth/sign-up-success", "/auth/error", "/protected"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (isProduction && !wholesalePortalEnabled && wholesaleMockPaths.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
