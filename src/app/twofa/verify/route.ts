import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

import { hashOtp } from '@/lib/twofa-otp'
import { TWOFA_COOKIE, issueTwoFactorCookie } from '@/lib/twofa-cookie'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type OtpUser = { otpHash?: string | null; otpExpiresAt?: string | null; otpAttempts?: number | null }

/** Verify a submitted code; on success set the signed 2FA-pass cookie. */
export async function POST(req: Request) {
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: req.headers })
  if (!user) return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 })

  const { code } = (await req.json().catch(() => ({ code: '' }))) as { code?: string }

  const u = (await payload.findByID({
    collection: 'users',
    id: user.id,
    overrideAccess: true,
  })) as unknown as OtpUser

  if (!u.otpHash || !u.otpExpiresAt || new Date(u.otpExpiresAt).getTime() < Date.now()) {
    return NextResponse.json({ error: 'Code expired — request a new one.' }, { status: 400 })
  }
  if ((u.otpAttempts ?? 0) >= 5) {
    return NextResponse.json({ error: 'Too many attempts — request a new code.' }, { status: 429 })
  }
  if (hashOtp(String(code || '')) !== u.otpHash) {
    await payload.update({
      collection: 'users',
      id: user.id,
      overrideAccess: true,
      data: { otpAttempts: (u.otpAttempts ?? 0) + 1 },
    })
    return NextResponse.json({ error: 'Incorrect code.' }, { status: 400 })
  }

  await payload.update({
    collection: 'users',
    id: user.id,
    overrideAccess: true,
    data: { otpHash: null, otpExpiresAt: null, otpAttempts: 0 },
  })

  const token = await issueTwoFactorCookie(String(user.id), 4)
  const res = NextResponse.json({ ok: true })
  res.cookies.set(TWOFA_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 4 * 60 * 60,
  })
  return res
}
