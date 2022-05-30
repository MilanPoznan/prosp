import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

export const AboutSection = styled.section`
  display: flex;
  flex-flow: column;
  @media ${device.desktopS} {
    padding: 80px 0 ;
    flex-flow: row-reverse;
    justify-content: space-between;
  }

`
export const AboutLeft = styled.div`
  .gatsby-image-wrapper {
    max-height: 40vh;
box-shadow: 5px 5px 19px 2px #535353;
  }
  @media ${device.desktopS} {
    position: relative;
    width: 35%;
    .gatsby-image-wrapper {
      max-width: 300px;
      height: 500px;
    }
  }


`

export const AboutRight = styled.div`

  margin-bottom: 40px;
  @media ${device.desktopS} {
    width: 60%;
  }
`
