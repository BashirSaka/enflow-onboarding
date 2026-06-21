import React from 'react'

const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    sub: 'Solo / single location',
    price: 15000,
    features: [
      'ZaraAI Basic model',
      '1 location',
      'Up to 3 staff',
      'Orders & menu mgmt',
      'WhatsApp replies (auto)',
      'Email support',
    ],
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    sub: 'Most popular',
    price: 45000,
    features: [
      'ZaraAI Pro model',
      'Up to 3 locations',
      'Unlimited staff',
      'Customer insight & ROI dashboard',
      'Loyalty & feedback automation',
      'Priority chat support',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    sub: 'Chains & franchises',
    price: null,
    features: [
      'ZaraAI Enterprise model',
      'Unlimited locations',
      'Custom integrations & API',
      'Dedicated success manager',
      'SLA + on-prem option',
      'Advanced security & SSO',
    ],
    popular: false,
  },
]

export default function StepPickPlan({ data, onChange }) {
  const billing = data.billing || 'monthly'
  const selectedPlan = data.plan || 'pro'

  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-1">Choose your ZaraAI plan.</h1>
      <p className="text-sm text-ink-muted mb-5">
        All plans billed monthly. Cancel anytime. 14-day free trial.
      </p>

      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-bg-input border border-border-warm rounded-full p-1">
          <button
            onClick={() => onChange('billing', 'monthly')}
            className={`text-xs font-medium rounded-full px-4 py-1.5 transition-colors ${
              billing === 'monthly' ? 'bg-accent-gradient text-white' : 'text-ink-muted'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => onChange('billing', 'annual')}
            className={`text-xs font-medium rounded-full px-4 py-1.5 transition-colors ${
              billing === 'annual' ? 'bg-accent-gradient text-white' : 'text-ink-muted'
            }`}
          >
            Annual · save 20%
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {PLANS.map((plan) => {
          const isSelected = selectedPlan === plan.id
          const displayPrice =
            plan.price === null
              ? 'Custom'
              : `₦${(billing === 'annual' ? Math.round(plan.price * 0.8) : plan.price).toLocaleString()}`

          return (
            <div
              key={plan.id}
              onClick={() => onChange('plan', plan.id)}
              className={`relative border rounded-xl p-4 cursor-pointer transition-colors ${
                isSelected || plan.popular
                  ? 'border-accent'
                  : 'border-border-warm'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-4 bg-accent-gradient text-white text-[10px] font-semibold rounded-full px-2.5 py-0.5">
                  POPULAR
                </span>
              )}
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-ink">{plan.name}</span>
                {plan.popular && (
                  <span className="text-xs text-accent-light">Most popular</span>
                )}
              </div>
              <div className="text-xs text-ink-muted mb-2">{plan.sub}</div>
              <div className="text-2xl font-bold text-ink mb-3">
                {displayPrice}
                {plan.price !== null && (
                  <span className="text-xs text-ink-muted font-normal">/mo</span>
                )}
              </div>
              <ul className="space-y-1.5 mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-ink-muted">
                    <span className="text-success">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full text-sm font-medium rounded-lg px-4 py-2.5 transition-colors ${
                  plan.popular
                    ? 'bg-accent-gradient text-white'
                    : 'bg-bg-input border border-border-input text-ink'
                }`}
              >
                {plan.price === null ? 'Talk to sales' : 'Start 14-day trial'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
