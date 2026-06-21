import React from 'react'
import { Field, TextInput, SelectInput } from '../FormFields'

export default function StepBusinessProfile({ data, onChange }) {
  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-1">Tell us about your business</h1>
      <p className="text-sm text-ink-muted mb-5">We'll tailor Enflow to your operations.</p>

      <Field label="Business name">
        <TextInput
          placeholder="e.g. Adaeze's Kitchen"
          value={data.businessName || ''}
          onChange={(e) => onChange('businessName', e.target.value)}
        />
      </Field>

      <Field label="Website" optional>
        <TextInput
          placeholder="www.adaezekitchen.ng"
          value={data.website || ''}
          onChange={(e) => onChange('website', e.target.value)}
        />
      </Field>

      <Field label="Country">
        <SelectInput
          value={data.country || 'Nigeria'}
          onChange={(e) => onChange('country', e.target.value)}
        >
          <option>Nigeria</option>
          <option>Ghana</option>
          <option>Kenya</option>
          <option>South Africa</option>
        </SelectInput>
      </Field>

      <Field label="Currency" hint="Defaults from country.">
        <SelectInput
          value={data.currency || 'NGN ₦'}
          onChange={(e) => onChange('currency', e.target.value)}
        >
          <option>NGN ₦</option>
          <option>GHS ₵</option>
          <option>KES KSh</option>
          <option>ZAR R</option>
        </SelectInput>
      </Field>

      <Field label="Number of locations" hint="Drives plan recommendation.">
        <SelectInput
          value={data.locations || '1'}
          onChange={(e) => onChange('locations', e.target.value)}
        >
          <option>1</option>
          <option>2–3</option>
          <option>4–10</option>
          <option>10+</option>
        </SelectInput>
      </Field>

      <Field label="Number of staff">
        <SelectInput
          value={data.staff || '5–10'}
          onChange={(e) => onChange('staff', e.target.value)}
        >
          <option>1–4</option>
          <option>5–10</option>
          <option>11–25</option>
          <option>25+</option>
        </SelectInput>
      </Field>

      <div className="mt-4 border border-dashed border-border-input rounded-xl p-6 text-center cursor-pointer hover:border-accent transition-colors">
        <div className="text-accent text-xl mb-1">⬆️</div>
        <p className="text-sm">
          <span className="text-accent-light">Drag &amp; Drop</span>{' '}
          <span className="text-ink-muted">or click to upload</span>
        </p>
        <p className="text-xs text-ink-muted mt-1">PNG, JPG or SVG · max 2MB</p>
      </div>
    </div>
  )
}
