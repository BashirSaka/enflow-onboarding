import React, { useEffect, useState } from 'react'

export default function StepVerifyEmail({ data, onChange }) {
  const code = data.verifyCode || ['', '', '', '', '', '']
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    if (seconds <= 0) return
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [seconds])

  const handleDigit = (i, val) => {
    if (val.length > 1) return
    const next = [...code]
    next[i] = val.replace(/[^0-9]/g, '')
    onChange('verifyCode', next)
    // auto-advance focus
    if (val && i < 5) {
      document.getElementById(`code-${i + 1}`)?.focus()
    }
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-1">Verify your email</h1>
      <p className="text-sm text-ink-muted mb-5">
        We sent a 6-digit code to {data.email || 'you@yourrestaurant.com'}
      </p>

      <div className="border border-border-warm rounded-xl p-4 mb-3">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center text-white text-sm">
            ✉️
          </div>
          <div>
            <div className="text-sm text-ink font-medium">Check your inbox</div>
            <div className="text-xs text-ink-muted">Usually arrives within 30 seconds</div>
          </div>
        </div>

        <div className="flex gap-2 justify-center mb-3">
          {code.map((digit, i) => (
            <input
              key={i}
              id={`code-${i}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleDigit(i, e.target.value)}
              className="w-11 h-12 text-center bg-white text-gray-900 text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          ))}
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-ink-muted">
            Resend code in 0:{seconds.toString().padStart(2, '0')}
          </span>
          <div className="flex gap-3">
            <span className="text-accent-light cursor-pointer">Change email</span>
            <span className="text-accent-light cursor-pointer">Skip for now</span>
          </div>
        </div>
      </div>
    </div>
  )
}
