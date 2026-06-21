import React from 'react'
import { TextInput, SelectInput } from '../FormFields'

export default function StepInviteTeam({ data, onChange }) {
  const teammates = data.teammates || [
    { email: '', role: 'Manager' },
    { email: '', role: 'Manager' },
    { email: '', role: 'Manager' },
  ]

  const updateTeammate = (i, field, value) => {
    const next = teammates.map((t, idx) => (idx === i ? { ...t, [field]: value } : t))
    onChange('teammates', next)
  }

  const addTeammate = () => {
    onChange('teammates', [...teammates, { email: '', role: 'Manager' }])
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-ink mb-1">Invite your team.</h1>
      <p className="text-sm text-ink-muted mb-5">
        Add managers, waiters, kitchen staff — assign roles.
      </p>

      <div className="border border-border-warm rounded-xl p-4 mb-3 space-y-3">
        {teammates.map((t, i) => (
          <div key={i} className="grid grid-cols-[1fr_120px] gap-2">
            <TextInput
              placeholder="name@gmail.com"
              value={t.email}
              onChange={(e) => updateTeammate(i, 'email', e.target.value)}
            />
            <SelectInput
              value={t.role}
              onChange={(e) => updateTeammate(i, 'role', e.target.value)}
            >
              <option>Manager</option>
              <option>Waiter</option>
              <option>Kitchen staff</option>
              <option>Cashier</option>
            </SelectInput>
          </div>
        ))}

        <button
          onClick={addTeammate}
          className="text-sm text-accent-light hover:opacity-80 transition-opacity"
        >
          + Add another
        </button>

        <div className="pt-3 border-t border-border-warm">
          <div className="text-xs text-ink-muted mb-2">OR SHARE INVITE LINK</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-bg-input border border-border-input rounded-lg px-3 py-2.5 text-sm text-ink-muted truncate">
              🔗 https://app.enflow.io/invite/xyz...
            </div>
            <button className="bg-accent-gradient text-white text-xs font-medium rounded-lg px-3.5 py-2.5 whitespace-nowrap">
              Copy
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs text-ink-muted">
        You can skip this and invite people later from settings &gt; Team.
      </p>
    </div>
  )
}
