import React from 'react'
import { PrimaryButton, SecondaryButton, DarkButton } from '../FormFields'
import { GoogleIcon, AppleIcon, MailIcon } from '../Icons'

export default function StepWelcome() {
  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-2">Run your restaurant smarter.</h1>
      <p className="text-sm text-ink-muted mb-6 leading-relaxed">
        Let <span className="text-accent-light">ZaraAI</span> handle stuff — orders, replies, reviews, reports — while you focus on the food and the floor.
      </p>

      <div className="space-y-3 mb-4">
        <PrimaryButton>
          <MailIcon className="w-4 h-4" /> Create account with Email
        </PrimaryButton>
        <SecondaryButton>
          <GoogleIcon className="w-4 h-4" /> Continue with Google
        </SecondaryButton>
        <DarkButton>
          <AppleIcon className="w-4 h-4" /> Continue with Apple
        </DarkButton>
      </div>

      <p className="text-sm text-ink-muted text-center mb-4">
        Already have an account? <span className="text-accent-light cursor-pointer">Sign in</span>
      </p>

      <div className="flex items-center justify-center gap-2 text-xs text-ink-muted">
        <span className="text-accent-gold">★</span>
        <span>Tested by 200+ restaurants · 4.9</span>
      </div>
    </div>
  )
}
