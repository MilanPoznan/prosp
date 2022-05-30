import React from 'react'
import { CtaComponentSection } from './CtaComponent.styled'
import { Heding3, GeneralButton, UppercaseLabel, ContentWrapper } from '../styles/globalComponents.styled'

import CtaButton from './CtaButton'


export default function CtaComponent({ data }) {
  const { label, title, buttonText, buttonUrl, hasBottomPadding, hasTopPadding } = data

  return (
    <CtaComponentSection hasBottomPadding={hasBottomPadding} hasTopPadding={hasTopPadding}>
      <UppercaseLabel>{label}</UppercaseLabel>
      <Heding3>{title}</Heding3>
      {buttonUrl && <GeneralButton>
        <CtaButton
          type="ghost"
          buttonTitle={buttonText}
          buttonUrl={buttonUrl}
        />
      </GeneralButton>}
    </CtaComponentSection>
  )
}