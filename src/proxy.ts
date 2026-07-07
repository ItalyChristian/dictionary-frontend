import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const publicRoutes = ["/login", "/register"];
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );

  const token = request.cookies.get("auth_token")?.value;

  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublicRoute && !token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|vector-webp.webp|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
