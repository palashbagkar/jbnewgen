import { NextResponse, type NextRequest } from 'next/server'
import { TWOFA_COOKIE, verifyTwoFactorCookie } from '@/lib/twofa-cookie'

/**
 * Gate /admin behind email-OTP 2FA and mark it noindex. Self-activating:
 * 2FA is only enforced once RESEND_API_KEY is configured, so the panel stays
 * usable before then. Logged-in-but-not-2FA'd users go to /admin-verify.
 */
const noindex = (res: NextResponse) => {
  res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return res
}

export async function middleware(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) return noindex(NextResponse.next())

  const hasSession = req.cookies.get('payload-token')
  if (!hasSession) return noindex(NextResponse.next()) // not logged in → Payload login

  const passed = await verifyTwoFactorCookie(req.cookies.get(TWOFA_COOKIE)?.value)
  if (!passed) {
    const url = req.nextUrl.clone()
    url.pathname = '/admin-verify'
    url.search = ''
    return noindex(NextResponse.redirect(url))
  }
  return noindex(NextResponse.next())
}

export const config = { matcher: ['/admin/:path*'] }
