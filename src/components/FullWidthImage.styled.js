import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

export const FullWidthImageSection = styled.div`

`

export const FullWidthImageImg = styled.div`
height: 205px;
width: 100%;
  @media ${device.tablet} {
    height: 420px;
  }
  @media ${device.desktopS} {
    height: 560px;
  }
  @media ${device.desktop} {
    height: 672px;
  }

`
