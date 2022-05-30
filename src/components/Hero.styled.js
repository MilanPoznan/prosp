import styled from 'styled-components'


export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  .gatsby-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 50vh;
    z-index: 10;

  }
  h1, h3 {
    position: relative;
    z-index: 50;
    color: ${({ theme }) => theme.colors.white}
  }
  p {
    position: relative;
    z-index: 50;
  }

`

export const HeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background-color: #33333333;
  z-index: 30;
`