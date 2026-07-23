import { SignJWT, jwtVerify } from 'jose'

/** Signed 2FA-pass cookie helpers. Edge-safe (jose only) so middleware can use them. */
export const TWOFA_COOKIE = 'pl_2fa'

const secret = () =>
  new TextEncoder().encode(process.env.TWOFA_SECRET || process.env.PAYLOAD_SECRET || 'dev-secret')

export async function issueTwoFactorCookie(uid: string, hours = 4): Promise<string> {
  return new SignJWT({ uid })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${hours}h`)
    .sign(secret())
}

export async function verifyTwoFactorCookie(token?: string): Promise<{ uid: string } | null> {
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, secret())
    return { uid: String(payload.uid) }
  } catch {
    return null
  }
}
