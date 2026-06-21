import React from 'react'
import { Field, SelectInput, TextInput } from '../FormFields'

const LANGUAGES = ['Pidgin', 'Yoruba', 'Igbo', 'Hausa', 'Swahili', 'Twi']

export default function StepPersonalizeAI({ data, onChange }) {
  const alsoSpeaks = data.alsoSpeaks || ['Pidgin']

  const toggleLanguage = (lang) => {
    const next = alsoSpeaks.includes(lang)
      ? alsoSpeaks.filter((l) => l !== lang)
      : [...alsoSpeaks, lang]
    onChange('alsoSpeaks', next)
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-1">Personalize ZaraAI for your restaurant.</h1>
      <p className="text-sm text-ink-muted mb-5">
        A few quick questions so Zara sounds like you.
      </p>

      <Field label="Brand voice">
        <SelectInput
          value={data.brandVoice || 'Friendly'}
          onChange={(e) => onChange('brandVoice', e.target.value)}
        >
          <option>Friendly</option>
          <option>Professional</option>
          <option>Playful</option>
        </SelectInput>
      </Field>

      <Field label="Primary language">
        <SelectInput
          value={data.primaryLanguage || 'English'}
          onChange={(e) => onChange('primaryLanguage', e.target.value)}
        >
          <option>English</option>
          <option>French</option>
          <option>Portuguese</option>
        </SelectInput>
      </Field>

      <div className="mb-4">
        <label className="text-sm font-medium text-ink block mb-2">Also speaks</label>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((lang) => {
            const active = alsoSpeaks.includes(lang)
            return (
              <button
                key={lang}
                onClick={() => toggleLanguage(lang)}
                className={`text-xs rounded-full px-3 py-1.5 border transition-colors ${
                  active
                    ? 'border-accent bg-accent/10 text-accent-light'
                    : 'border-border-warm text-ink-muted'
                }`}
              >
                {lang}
              </button>
            )
          })}
        </div>
        <p className="text-xs text-ink-muted mt-2">
          Zara will reply in whichever language the customer uses.
        </p>
      </div>

      <Field label="Top goal">
        <TextInput
          placeholder="More repeat customers"
          value={data.topGoal || ''}
          onChange={(e) => onChange('topGoal', e.target.value)}
        />
      </Field>

      <Field label="Operating hours">
        <TextInput
          placeholder="Mon–Sun, 10am–11pm"
          value={data.operatingHours || ''}
          onChange={(e) => onChange('operatingHours', e.target.value)}
        />
      </Field>

      <div className="border border-border-warm rounded-xl p-4 mt-2">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-accent">✨</span>
          <span className="text-sm font-medium text-ink">Live ZaraAI preview</span>
          <span className="text-xs text-ink-muted">Updates as you type</span>
        </div>
        <div className="space-y-2">
          <div className="bg-bg-input rounded-lg px-3 py-2 text-xs text-ink max-w-[80%]">
            Customer: "Una still dey open?"
          </div>
          <div className="bg-accent-gradient rounded-lg px-3 py-2 text-xs text-white max-w-[85%] ml-auto">
            Yes o! We dey open till 11pm. You wan order jollof or you dey come dine-in?
          </div>
        </div>
      </div>
    </div>
  )
}
