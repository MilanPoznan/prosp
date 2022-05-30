import React, { useState } from 'react'
import { AboutSection, AboutRight, AboutLeft } from './About.styled'
import { GatsbyImage } from "gatsby-plugin-image"
import { ContentWrapper, BigP } from '../styles/globalComponents.styled'

import { useInterval } from '../hooks/useInterval'

export default function About({ data }) {

  const { imageRepeater, content, title } = data


  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(2000);

  useInterval(() => {
    // Your custom logic here
    if (count !== imageRepeater.length - 1) {
      setCount(count + 1);

    } else {
      setCount(0)
    }
  }, delay);

  return (
    <ContentWrapper>
      <AboutSection>
        <AboutRight>
          <h2>{title}</h2>
          <BigP dangerouslySetInnerHTML={{ __html: content }} />
        </AboutRight>

        <AboutLeft>
          <GatsbyImage
            image={imageRepeater[count].image.localFile?.childImageSharp.gatsbyImageData} alt="about" />
        </AboutLeft>
      </AboutSection>
    </ContentWrapper>
  )
}
