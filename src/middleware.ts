import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // For admin routes, we'll let the client-side handle authentication
  // The middleware will just pass through and let the admin page check localStorage
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Client-side will handle token validation via /api/ping
    return NextResponse.next()
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}