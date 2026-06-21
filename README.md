# Enflow Onboarding (Standalone)

A polished, standalone rebuild of the Enflow onboarding wireframe — Vite + React + Tailwind CSS.

## Structure
- 12-step wizard, single component with internal step state (no URL routing)
- Step order matches the wireframe exactly: Welcome → AI Floor Manager → Create Account → Verify Email → Business Profile → Choose Industry → Connect Tools → Pick Plan → Payment → Invite Team → Personalize AI → Launch
- Colors/fonts extracted from the UI/UX design screenshots (dark theme, orange/amber accent, Inter font)
- Form state lives in memory only (no localStorage) — resets on refresh, per your spec

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## File map

```
src/
  App.jsx                       — step state, validation, routing logic
  components/
    OnboardingShell.jsx         — persistent header, progress bar, footer nav
    FormFields.jsx              — shared Field/Input/Button components
    steps/
      StepWelcome.jsx
      StepFloorManager.jsx
      StepCreateAccount.jsx
      StepVerifyEmail.jsx
      StepBusinessProfile.jsx
      StepChooseIndustry.jsx
      StepConnectTools.jsx
      StepPickPlan.jsx
      StepPayment.jsx
      StepInviteTeam.jsx
      StepPersonalizeAI.jsx
      StepLaunch.jsx
```

## Validation rules implemented
- Create Account: full name, email, password, ToS checkbox required
- Verify Email: all 6 digits required
- Business Profile: business name required
- Choose Industry: an industry must be selected
- Connect Tools: skippable
- Payment: card fields required if "Card" method selected
- Invite Team: skippable

## Notes
- This is a fresh, separate project from the Enflow wizard you're already building — not connected to that codebase.
- Emoji icons are used as placeholders for the icon set (POS, WhatsApp, etc.) — swap in your actual icon library/SVGs whenever ready.
