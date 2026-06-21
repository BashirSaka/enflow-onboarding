import React from 'react'

const CHECKLIST = [
  { label: 'Upload your menu', done: true },
  { label: 'Connect WhatsApp', done: false },
  { label: 'Set up your first automation', done: false },
  { label: 'Invite your manager', done: false },
  { label: 'Take ZaraAI tour (2 min)', done: false },
]

export default function StepLaunch() {
  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="text-xl font-bold text-ink mb-1">You're all set 🎉</h1>
        <p className="text-sm text-ink-muted">
          Welcome to Enflow. Here's what to do next.
        </p>
      </div>

      <div className="border border-border-warm rounded-xl p-4 mb-4">
        <div className="text-xs text-ink-muted mb-3">QUICK-START CHECKLIST</div>
        <div className="space-y-2.5">
          {CHECKLIST.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    item.done ? 'bg-success text-white' : 'border border-border-input'
                  }`}
                >
                  {item.done ? '✓' : ''}
                </span>
                <span
                  className={`text-sm ${item.done ? 'text-ink-muted line-through' : 'text-ink'}`}
                >
                  {item.label}
                </span>
              </div>
              <span className="text-ink-muted">›</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-accent/40 bg-accent/5 rounded-xl p-4 mb-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-accent-gradient flex items-center justify-center text-white">
          📞
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-ink">Free 15-min onboarding call</div>
          <div className="text-xs text-ink-muted">A specialist will walk you through your first automation.</div>
        </div>
      </div>
      <button className="w-full bg-bg-input border border-border-input text-ink text-sm font-medium rounded-lg px-4 py-2.5 mb-4">
        Book a call
      </button>

      <div className="border border-border-warm rounded-xl p-4 mb-3">
        <div className="text-sm font-medium text-ink mb-2">Get the mobile app</div>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-bg-input border border-border-input rounded-lg py-2 text-xs text-ink">
            iOS
          </button>
          <button className="bg-bg-input border border-border-input rounded-lg py-2 text-xs text-ink">
            Android
          </button>
        </div>
      </div>

      <div className="border border-border-warm rounded-xl p-4 flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-lg bg-accent-gradient flex items-center justify-center text-white">
          💬
        </div>
        <div>
          <div className="text-sm font-medium text-ink">Chat on WhatsApp 24/7</div>
          <div className="text-xs text-ink-muted">Need help? We reply in minutes.</div>
        </div>
      </div>
    </div>
  )
}
