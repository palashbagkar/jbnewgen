import type { CollectionConfig } from 'payload'

/** Admin accounts. `auth: true` gives Payload's built-in email+password login.
 *  2FA is layered on later (see todo: 2FA email OTP). */
export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000, // lock the account for 10 min after 5 failed logins
  },
  admin: { useAsTitle: 'email' },
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'notifyEmail',
      type: 'email',
      label: '2FA delivery email',
      admin: { description: 'Where the login OTP code is actually sent. Leave blank to use the login email above.' },
    },
    // Email-OTP 2FA state. Use admin.hidden (UI-only) — plain `hidden: true`
    // strips fields from API/local reads too, which broke verify.
    { name: 'otpHash', type: 'text', admin: { hidden: true } },
    { name: 'otpExpiresAt', type: 'date', admin: { hidden: true } },
    { name: 'otpAttempts', type: 'number', defaultValue: 0, admin: { hidden: true } },
    { name: 'otpLastSentAt', type: 'date', admin: { hidden: true } },
  ],
}
