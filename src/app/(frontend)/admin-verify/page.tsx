'use client'

import { useEffect, useRef, useState } from 'react'

/** Second-factor challenge: emails a 6-digit code, verifies it, unlocks /admin. */
export default function AdminVerify() {
  const [code, setCode] = useState('')
  const [msg, setMsg] = useState('Sending a code to your email…')
  const [busy, setBusy] = useState(false)
  const sentOnce = useRef(false)

  const send = async () => {
    setBusy(true)
    try {
      const r = await fetch('/twofa/send', { method: 'POST' })
      const j = await r.json().catch(() => ({}))
      setMsg(r.ok ? 'Code sent — check your email.' : j.error || 'Could not send code.')
    } finally {
      setBusy(false)
    }
  }

  useEffect(() => {
    if (sentOnce.current) return
    sentOnce.current = true
    send()
  }, [])

  const verify = async () => {
    setBusy(true)
    try {
      const r = await fetch('/twofa/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
      const j = await r.json().catch(() => ({}))
      if (r.ok) {
        window.location.href = '/admin'
        return
      }
      setMsg(j.error || 'Verification failed.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-5 px-6 py-24">
      <h1 className="text-2xl font-bold tracking-tight text-ink-900">Two-factor verification</h1>
      <p className="text-sm text-ink-500" aria-live="polite">
        {msg}
      </p>
      <input
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={6}
        value={code}
        onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
        placeholder="6-digit code"
        className="rounded-lg border border-ink-200 px-4 py-3 text-lg tracking-[0.4em] outline-none focus:border-flame-400"
      />
      <button
        onClick={verify}
        disabled={busy || code.length !== 6}
        className="rounded-lg bg-flame-500 px-4 py-3 font-semibold text-white transition-opacity disabled:opacity-50"
      >
        Verify &amp; continue
      </button>
      <button onClick={send} disabled={busy} className="text-sm text-ink-500 underline underline-offset-2">
        Resend code
      </button>
    </div>
  )
}
