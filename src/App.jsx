import React, { useState } from 'react'
import OnboardingShell, { TOTAL_STEPS } from './components/OnboardingShell'

import StepWelcome from './components/steps/StepWelcome'
import StepFloorManager from './components/steps/StepFloorManager'
import StepCreateAccount from './components/steps/StepCreateAccount'
import StepVerifyEmail from './components/steps/StepVerifyEmail'
import StepBusinessProfile from './components/steps/StepBusinessProfile'
import StepChooseIndustry from './components/steps/StepChooseIndustry'
import StepConnectTools from './components/steps/StepConnectTools'
import StepPickPlan from './components/steps/StepPickPlan'
import StepPayment from './components/steps/StepPayment'
import StepInviteTeam from './components/steps/StepInviteTeam'
import StepPersonalizeAI from './components/steps/StepPersonalizeAI'
import StepLaunch from './components/steps/StepLaunch'

// Steps that can be skipped without validation
const SKIPPABLE_STEPS = new Set([7, 10]) // Connect Tools, Invite Team

export default function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const goNext = () => {
    if (step < TOTAL_STEPS) setStep(step + 1)
  }

  const goBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const isValid = validateStep(step, formData)
  const continueDisabled = !isValid && !SKIPPABLE_STEPS.has(step)

  return (
    <OnboardingShell
      step={step}
      onBack={goBack}
      onContinue={goNext}
      showBack={step > 1}
      showFooterNav={step !== 12}
      continueDisabled={continueDisabled}
      continueLabel={step === TOTAL_STEPS - 1 ? 'Finish →' : 'Continue →'}
    >
      <StepRenderer step={step} data={formData} onChange={updateField} />
    </OnboardingShell>
  )
}

function StepRenderer({ step, data, onChange }) {
  switch (step) {
    case 1:
      return <StepWelcome />
    case 2:
      return <StepFloorManager />
    case 3:
      return <StepCreateAccount data={data} onChange={onChange} />
    case 4:
      return <StepVerifyEmail data={data} onChange={onChange} />
    case 5:
      return <StepBusinessProfile data={data} onChange={onChange} />
    case 6:
      return <StepChooseIndustry data={data} onChange={onChange} />
    case 7:
      return <StepConnectTools data={data} onChange={onChange} />
    case 8:
      return <StepPickPlan data={data} onChange={onChange} />
    case 9:
      return <StepPayment data={data} onChange={onChange} />
    case 10:
      return <StepInviteTeam data={data} onChange={onChange} />
    case 11:
      return <StepPersonalizeAI data={data} onChange={onChange} />
    case 12:
      return <StepLaunch />
    default:
      return null
  }
}

function validateStep(step, data) {
  switch (step) {
    case 3: // Create Account
      return Boolean(data.fullName && data.email && data.password && data.agreedToTerms)
    case 4: // Verify Email
      return Array.isArray(data.verifyCode) && data.verifyCode.every((d) => d !== '')
    case 5: // Business Profile
      return Boolean(data.businessName)
    case 6: // Choose Industry
      return Boolean(data.industry)
    case 9: // Payment
      if (data.paymentMethod === 'card') {
        return Boolean(data.cardName && data.cardNumber && data.cardExpiry && data.cardCvc)
      }
      return Boolean(data.paymentMethod)
    default:
      return true
  }
}
