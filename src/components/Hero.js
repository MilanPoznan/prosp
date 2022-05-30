import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

import { HeroSection, HeroOverlay } from './Hero.styled'
import { ContentWrapper, Heading1, Heding3, Heading2 } from '../styles/globalComponents.styled'
import TextShuffle from './TextShuffle'

export default function Hero({ data }) {
  const { image, title, subtitle } = data

  return (
    <HeroSection>
      <TextShuffle value={'Prosperous is comming soon'} />
      <HeroOverlay />
      <GatsbyImage image={image.localFile?.childImageSharp.gatsbyImageData} alt="hero prosperous" />
      <ContentWrapper>
      </ContentWrapper>
      {/* <Heading1>{title}</Heading1> */}
      {/* <Heding3>{subtitle}</Heding3> */}
    </HeroSection>
  )
}
