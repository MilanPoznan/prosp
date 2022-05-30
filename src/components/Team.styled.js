import styled from 'styled-components'
import { device } from '../styles/mediaQueries'


export const TeamSection = styled.section`
  display: flex;
  flex-flow: row;
  max-width: 100vw;
  overflow-x: scroll;
`

export const SingleTeamMember = styled.div`
  position: relative;
  margin: 0 10px;
`
export const TeamContent = styled.div`
position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  h3 {
    margin: 8px 0;
  }

  a {
    position: absolute;
    top: 14px;
    svg {
    transition: 0.3s;
    fill: rgb(29, 155, 240);
    &:hover {
      fill: ${({ theme }) => theme.colors.accent_primary};
    }
  }
  }

  @media ${device.tablet} {
    p {
      margin-bottom: 20px;
    }
  }

`

export const TeamHeadingWrapp = styled.div`
display: flex;
justify-content: center;
text-align: center;
text-transform: uppercase;
padding:  24px 0;
@media ${device.tablet} {
    padding: 0 0  44px 0 ;
  }

`
export const ImageWrapper = styled.div`
  width: 230px;
  height: 230px;
  overflow: hidden;
  .gatsby-image-wrapper {
    transition: 0.5s;
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }
  position: relative;
  @media ${device.tablet} {
    width: 33vw;
    height: 33vw;
  }

  @media ${device.desktopS} {
    width: 27vw;
    height: 27vw;
  }
`