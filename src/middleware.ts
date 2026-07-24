import { decodeJwt } from 'jose'
import { NextResponse, type NextRequest } from 'next/server'
import { TWOFA_COOKIE, verifyTwoFactorCookie } from '@/lib/twofa-cookie'

/**
 * Gate /admin behind email-OTP 2FA and mark it noindex. Self-activating:
 * 2FA is only enforced once RESEND_API_KEY is configured, so the panel stays
 * usable before then. Logged-in-but-not-2FA'd users go to /admin-verify.
 *
 * The 2FA pass cookie is bound to the user id it was issued for, and is dropped
 * whenever there is no Payload session — otherwise signing out and signing in as
 * a different admin would inherit the previous admin's pass and skip the OTP.
 */
const PAYLOAD_SESSION_COOKIE = 'payload-token'

const noindex = (res: NextResponse) => {
  res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return res
}

/**
 * User id from the Payload session cookie. Decoded, not verified: Payload
 * itself authenticates the session for every real read/write, so this only
 * needs to answer "which account is this pass cookie claiming to belong to".
 */
const sessionUserId = (token?: string): string | null => {
  if (!token) return null
  try {
    const claims = decodeJwt(token) as { id?: string | number }
    return claims.id === undefined ? null : String(claims.id)
  } catch {
    return null
  }
}

export async function middleware(req: NextRequest) {
  // Signing out must also end the second factor.
  if (req.nextUrl.pathname === '/api/users/logout') {
    const res = NextResponse.next()
    res.cookies.delete(TWOFA_COOKIE)
    return res
  }

  if (!process.env.RESEND_API_KEY) return noindex(NextResponse.next())

  const uid = sessionUserId(req.cookies.get(PAYLOAD_SESSION_COOKIE)?.value)
  if (!uid) {
    // Not logged in → Payload's own login screen. Drop any stale pass so the
    // next account to sign in cannot inherit it.
    const res = noindex(NextResponse.next())
    res.cookies.delete(TWOFA_COOKIE)
    return res
  }

  const passed = await verifyTwoFactorCookie(req.cookies.get(TWOFA_COOKIE)?.value)
  if (!passed || passed.uid !== uid) {
    const url = req.nextUrl.clone()
    url.pathname = '/admin-verify'
    url.search = ''
    const res = noindex(NextResponse.redirect(url))
    if (passed) res.cookies.delete(TWOFA_COOKIE) // pass belonged to another account
    return res
  }
  return noindex(NextResponse.next())
}

export const config = { matcher: ['/admin/:path*', '/api/users/logout'] }
