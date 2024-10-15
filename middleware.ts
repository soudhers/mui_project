// import { NextResponse, NextRequest } from 'next/server'
// import { authenticate } from 'auth-provider'

// export function middleware(request: NextRequest) {
//   const isAuthenticated = authenticate(request)

//   // If the user is authenticated, continue as normal
//   if (isAuthenticated) {
//     return NextResponse.next()
//   }

//   // Redirect to login page if not authenticated
//   return NextResponse.redirect(new URL('/login', request.url))
// }

// export const config = {
//   matcher: '/dashboard/:path*',
// }


export { default } from 'next-auth/middleware'

// Applies next-auth only to matching routes 
// export const config = { matcher: ['/api/auth/session', '/api/auth/providers', '/api/auth/signin'] }