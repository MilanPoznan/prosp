import React from 'react'
import PropTypes from 'prop-types'

import { Parallax } from 'react-parallax';
import { FullWidthImageImg } from './FullWidthImage.styled'

export default function FullWidthImage({ image }) {

  return (
    <div className="full-width-image">
      {
        image &&
        <Parallax strength={300} bgImage={image.sourceUrl} bgImageAlt={image.altText ? image.altText : ''}>
          <FullWidthImageImg>
          </FullWidthImageImg>
        </Parallax>
      }
    </div>
  )
}

FullWidthImage.propTypes = {
  image: PropTypes.object.isRequired
}