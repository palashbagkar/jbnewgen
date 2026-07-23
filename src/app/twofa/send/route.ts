import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

import { generateOtp, hashOtp } from '@/lib/twofa-otp'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

/** Generate + email a 6-digit login code. Requires a valid Payload session. */
export async function POST(req: Request) {
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: req.headers })
  if (!user) return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 })

  const key = process.env.RESEND_API_KEY
  if (!key) {
    return NextResponse.json({ error: 'Email is not configured yet (missing RESEND_API_KEY).' }, { status: 500 })
  }

  const now = Date.now()
  const last = (user as { otpLastSentAt?: string }).otpLastSentAt
  if (last && now - Date.parse(last) < 30_000) {
    return NextResponse.json({ error: 'Please wait ~30 seconds before requesting another code.' }, { status: 429 })
  }

  const otp = generateOtp()
  await payload.update({
    collection: 'users',
    id: user.id,
    overrideAccess: true,
    data: {
      otpHash: hashOtp(otp),
      otpExpiresAt: new Date(now + 10 * 60 * 1000).toISOString(),
      otpAttempts: 0,
      otpLastSentAt: new Date(now).toISOString(),
    },
  })

  const notifyEmail = (user as { notifyEmail?: string; email?: string }).notifyEmail
  const to = (notifyEmail || process.env.TWOFA_TO || 'palashbagkar18@gmail.com')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  const from = process.env.TWOFA_FROM || 'onboarding@resend.dev'

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to,
      subject: `JB NewGen admin login code: ${otp}`,
      html: `<div style="font-family:system-ui,sans-serif"><p>Your JB NewGen admin login code:</p><p style="font-size:28px;font-weight:700;letter-spacing:4px">${otp}</p><p style="color:#666">Expires in 10 minutes. If you didn't try to sign in, ignore this email.</p></div>`,
    }),
  })
  if (!res.ok) {
    const detail = await res.text()
    return NextResponse.json({ error: 'Email failed to send.', detail }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
