import crypto from 'crypto'

/** Node-only OTP helpers (used by the /twofa route handlers). */
export const generateOtp = (): string => String(crypto.randomInt(0, 1_000_000)).padStart(6, '0')

export const hashOtp = (otp: string): string =>
  crypto.createHash('sha256').update(otp).digest('hex')
