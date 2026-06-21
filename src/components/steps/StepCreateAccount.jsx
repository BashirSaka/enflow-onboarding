import React from 'react'
import { Field, TextInput } from '../FormFields'

export default function StepCreateAccount({ data, onChange }) {
  const strength = getPasswordStrength(data.password || '')

  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-1">Create your account</h1>
      <p className="text-sm text-ink-muted mb-5">Takes less than 60 seconds.</p>

      <Field label="Full name">
        <TextInput
          placeholder="e.g. Adaeze Okafor"
          value={data.fullName || ''}
          onChange={(e) => onChange('fullName', e.target.value)}
        />
      </Field>

      <Field label="Work email">
        <TextInput
          type="email"
          placeholder="you@yourrestaurant.com"
          value={data.email || ''}
          onChange={(e) => onChange('email', e.target.value)}
        />
      </Field>

      <Field label="Phone (WhatsApp)" optional hint="We use this for order alerts only.">
        <TextInput
          placeholder="+234 ..."
          value={data.phone || ''}
          onChange={(e) => onChange('phone', e.target.value)}
        />
      </Field>

      <Field label="Password">
        <TextInput
          type="password"
          placeholder="••••••••"
          value={data.password || ''}
          onChange={(e) => onChange('password', e.target.value)}
        />
        <div className="flex gap-1 mt-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i < strength
                  ? strength === 1
                    ? 'bg-red-500'
                    : strength === 2
                    ? 'bg-yellow-400'
                    : 'bg-success'
                  : 'bg-bg-input'
              }`}
            />
          ))}
        </div>
      </Field>

      <label className="flex items-start gap-2 text-sm text-ink-muted cursor-pointer">
        <input
          type="checkbox"
          checked={data.agreedToTerms || false}
          onChange={(e) => onChange('agreedToTerms', e.target.checked)}
          className="mt-0.5 accent-accent"
        />
        <span>
          I agree to <span className="text-accent-light">Terms of Service</span> and{' '}
          <span className="text-accent-light">Privacy Policy</span>
        </span>
      </label>
    </div>
  )
}

function getPasswordStrength(password) {
  if (!password) return 0
  if (password.length < 6) return 1
  if (password.length < 10) return 2
  return 3
}
