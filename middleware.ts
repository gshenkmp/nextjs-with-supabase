import { updateSession } from "@/lib/supabase/middleware";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Only run auth checks on protected routes and dashboard
  const { pathname } = request.nextUrl;
  
  // Routes that need authentication
  const protectedPaths = ['/protected', '/dashboard'];
  const needsAuth = protectedPaths.some(path => pathname.startsWith(path));
  
  if (needsAuth) {
    return await updateSession(request);
  }
  
  // For all other routes (/, /solutions, /pricing, etc.), allow through without auth check
  return;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
