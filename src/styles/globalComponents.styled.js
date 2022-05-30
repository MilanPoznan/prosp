import './fonts.css'
import styled from "styled-components";
import { device } from "../styles/mediaQueries";

export const Heading1 = styled.h1`
  margin: 0;
  font-family: 'BRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 52px;
  color: ${({ theme }) => theme.colors.white};
  @media ${device.tablet} {
    font-size: 70px;
    line-height: 78px;
  }
  @media ${device.tabletL} {
    font-size: 90px;
    line-height: 96px;
  }
  @media ${device.desktopS} {
    font-size: 70px;
    line-height: 78px;
  }
  @media ${device.desktopL} {
    font-size: 90px;
    line-height: 96px;
  }
`

export const Heading2 = styled.h2`
  margin: 0;
  font-family: 'BRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.black};
  @media ${device.tablet} {
    font-size: 48px;
    line-height: 52px;
  }
  @media ${device.tabletL} {
    font-size: 58px;
    line-height: 62px;
  }
  @media ${device.desktopS} {
    font-size: 48px;
    line-height: 52px;
  }
  @media ${device.desktopL} {
    font-size: 58px;
    line-height: 62px;
  }
`

export const Heding3 = styled.h3`
  margin: 0;
  font-family: 'BRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.black};
  @media ${device.tablet} {
    font-size: 34px;
    line-height: 42px;
  }
  @media ${device.tabletL} {
    font-size: 40px;
    line-height: 54px;
  }
  @media ${device.desktopS} {
    font-size: 34px;
    line-height: 42px;
  }
  @media ${device.desktopL} {
    font-size: 40px;
    line-height: 54px;
  }
`

export const BigPWrapper = styled.div`
  margin: 0;
  font-family: 'PMGroteskLight';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.darkGray};
`

export const BigP = styled.div`
  margin: 0;
  font-family: 'PMGroteskLight';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`

export const SmallP = styled.p`
  margin: 0;
  font-family: 'PMGrotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`
export const SmallLink = styled.a`
  font-size: 14px;
  line-height: 15px;
  font-family: 'PMGrotesk';
  font-weight: 400;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

export const ContentWrapper = styled.div`
width: 100%;
padding: 0px 30px 0px 30px;
  @media ${device.tablet} {
    padding: 0px 50px 0px 50px;
  }
  @media ${device.tabletL} {
    padding: 0px 80px 0px 80px;
  }
  @media ${device.desktopS} {
    max-width: 960px;
    margin: 0 auto;
    padding: 0;
  }
  @media ${device.desktop} {
    max-width: 1024px;
  }
  @media ${device.desktopL} {
    max-width: 1180px;
  }
`

export const UppercaseLabel = styled.p`
  margin-bottom: 20px;
  font-family: 'PMGroteskLight';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media ${device.tablet} {
    margin-bottom: 30px;
  }
  @media ${device.desktopL} {
    margin-bottom: 40px;
  }
`

export const GeneralButton = styled.div`
  width: 100%;
  @media ${device.tablet} {
    width: 223px;
  }
`