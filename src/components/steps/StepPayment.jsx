import React from 'react'
import { Field, TextInput } from '../FormFields'

const METHODS = [
  { id: 'card', label: 'Card', icon: '💳' },
  { id: 'bank', label: 'Bank transfer', icon: '🏦' },
  { id: 'paystack', label: 'Paystack', icon: '🅿️' },
]

const PLAN_PRICES = { basic: 15000, pro: 45000, enterprise: 0 }

export default function StepPayment({ data, onChange }) {
  const method = data.paymentMethod || 'card'
  const planId = data.plan || 'pro'
  const planName = { basic: 'Basic', pro: 'Pro', enterprise: 'Enterprise' }[planId]
  const price = PLAN_PRICES[planId]

  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-1">Add a payment method.</h1>
      <p className="text-sm text-ink-muted mb-5">
        You won't be charged until your 14-day trial ends.
      </p>

      <div className="border border-border-warm rounded-xl p-4 mb-4">
        <div className="text-xs text-ink-muted mb-2">METHOD</div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {METHODS.map((m) => (
            <button
              key={m.id}
              onClick={() => onChange('paymentMethod', m.id)}
              className={`flex flex-col items-center gap-1 border rounded-lg py-3 text-xs transition-colors ${
                method === m.id
                  ? 'border-accent bg-accent/10 text-ink'
                  : 'border-border-input text-ink-muted'
              }`}
            >
              <span className="text-base">{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>

        {method === 'card' && (
          <>
            <Field label="Cardholder name">
              <TextInput
                placeholder="Name on card"
                value={data.cardName || ''}
                onChange={(e) => onChange('cardName', e.target.value)}
              />
            </Field>
            <Field label="Card number">
              <TextInput
                placeholder="•••• •••• •••• ••••"
                value={data.cardNumber || ''}
                onChange={(e) => onChange('cardNumber', e.target.value)}
              />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Expiry">
                <TextInput
                  placeholder="MM / YY"
                  value={data.cardExpiry || ''}
                  onChange={(e) => onChange('cardExpiry', e.target.value)}
                />
              </Field>
              <Field label="CVC">
                <TextInput
                  placeholder="•••"
                  value={data.cardCvc || ''}
                  onChange={(e) => onChange('cardCvc', e.target.value)}
                />
              </Field>
            </div>
            <Field label="Billing address">
              <TextInput
                placeholder="Street, city, country"
                value={data.billingAddress || ''}
                onChange={(e) => onChange('billingAddress', e.target.value)}
              />
            </Field>
          </>
        )}

        <p className="text-xs text-ink-muted text-center mt-2">
          🔒 Secured · PCI-DSS · 256-bit SSL
        </p>
      </div>

      <div className="border border-border-warm rounded-xl p-4">
        <div className="text-xs text-ink-muted mb-2">ORDER SUMMARY</div>
        <div className="flex justify-between text-sm text-ink font-medium mb-1">
          <span>ZaraAI {planName}</span>
          <span className="text-xs text-ink-muted">Monthly · auto-renews</span>
        </div>
        <div className="flex justify-between text-xs text-ink-muted mt-3">
          <span>Plan</span>
          <span>{price ? `₦${price.toLocaleString()}` : 'Custom'}</span>
        </div>
        <div className="flex justify-between text-xs text-success">
          <span>Trial</span>
          <span>{price ? `−₦${price.toLocaleString()}` : '—'}</span>
        </div>
        <div className="flex justify-between text-sm font-bold text-ink mt-2 pt-2 border-t border-border-warm">
          <span>Due today</span>
          <span>₦0</span>
        </div>
      </div>
    </div>
  )
}
