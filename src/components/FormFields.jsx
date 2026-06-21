import React from 'react'

export function Field({ label, optional, hint, children }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-medium text-ink">{label}</label>
        {optional && <span className="text-xs text-ink-muted">Optional</span>}
      </div>
      {children}
      {hint && <p className="text-xs text-ink-muted mt-1">{hint}</p>}
    </div>
  )
}

export function TextInput({ className = '', ...props }) {
  return (
    <input
      className={`w-full bg-bg-input border border-border-input rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all ${className}`}
      {...props}
    />
  )
}

export function SelectInput({ className = '', children, ...props }) {
  return (
    <select
      className={`w-full bg-bg-input border border-border-input rounded-lg px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

export function PrimaryButton({ className = '', children, ...props }) {
  return (
    <button
      className={`w-full bg-accent-gradient text-white text-sm font-medium rounded-lg px-4 py-3 transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({ className = '', children, ...props }) {
  return (
    <button
      className={`w-full bg-white text-gray-900 text-sm font-medium rounded-lg px-4 py-3 transition-opacity hover:opacity-90 flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function DarkButton({ className = '', children, ...props }) {
  return (
    <button
      className={`w-full bg-apple text-white text-sm font-medium rounded-lg px-4 py-3 transition-opacity hover:opacity-90 flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
