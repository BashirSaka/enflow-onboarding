import React from 'react'

const STEP_LABELS = [
  'Welcome',
  'AI Floor Manager',
  'Create Account',
  'Verify Email',
  'Business Profile',
  'Choose Industry',
  'Connect Tools',
  'Pick Plan',
  'Payment',
  'Invite Team',
  'Personalize AI',
  'Launch',
]

const TOTAL_STEPS = STEP_LABELS.length

export default function OnboardingShell({
  step,
  onBack,
  onContinue,
  continueLabel = 'Continue →',
  continueDisabled = false,
  showBack = true,
  showFooterNav = true,
  children,
}) {
  const percent = Math.round((step / TOTAL_STEPS) * 100)
  const label = STEP_LABELS[step - 1]

  return (
    <div className="min-h-screen w-full bg-bg-page flex items-center justify-center p-4">
      <div className="w-full max-w-[640px] bg-bg-panel border border-border-warm rounded-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center text-white text-lg">
              ⚡
            </div>
            <div>
              <div className="font-bold text-ink tracking-tight leading-none">
                ENFLOW
              </div>
              <div className="text-[10px] text-ink-muted tracking-wider leading-none mt-0.5">
                POWERED BY <span className="text-accent-light">ZARAAI</span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink border border-border-warm rounded-lg px-3 py-1.5 transition-colors">
            Save &amp; Exit
            <span aria-hidden="true">↪</span>
          </button>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-ink-muted">
              Step {step}/{TOTAL_STEPS} · {label}
            </span>
            <span className="text-accent font-medium">{percent}%</span>
          </div>
          <div className="h-1.5 w-full bg-bg-input rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-gradient rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Step badge */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-light bg-accent/10 border border-accent/30 rounded-full px-3 py-1">
            ⚡ {label}
          </span>
        </div>

        {/* Step content */}
        <div>{children}</div>

        {/* Footer nav */}
        {showFooterNav && (
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-border-warm">
            {showBack ? (
              <button
                onClick={onBack}
                className="text-sm text-ink-muted hover:text-ink transition-colors"
              >
                ← Back
              </button>
            ) : (
              <span />
            )}
            <span className="text-xs text-ink-muted hidden sm:inline">Auto-saved</span>
            <button
              onClick={onContinue}
              disabled={continueDisabled}
              className="bg-accent-gradient text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {continueLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export { TOTAL_STEPS, STEP_LABELS }
