import styled from 'styled-components'
import { device } from "../styles/mediaQueries";


export const CtaComponentSection = styled.section`
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: ${({ hasTopPadding }) => hasTopPadding ? '60px' : '30px'};
  padding-bottom: ${({ hasBottomPadding }) => hasBottomPadding ? '60px' : '30px'};
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  a {
    margin-top: 40px;
  }
  @media ${device.tablet} {
    padding-top: ${({ hasTopPadding }) => hasTopPadding ? '100px' : '40px'};
    padding-bottom: ${({ hasBottomPadding }) => hasBottomPadding ? '100px' : '40px'};
    padding-left: 50px;
    padding-right: 50px;
    font-family: 'PMRegular';
    font-style: normal;
    font-weight: 700;
    font-size: 23.9953px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.black};
  }
  @media ${device.tabletL} {
    padding-top: ${({ hasTopPadding }) => hasTopPadding ? '120px' : '40px'};
    padding-bottom: ${({ hasBottomPadding }) => hasBottomPadding ? '120px' : '40px'};
    padding-left: 0px;
    padding-right: 0px;
    max-width: 680px;
    margin: 0 auto;
    font-size: 28px;

  }
  @media ${device.desktopS} {
    padding-top: ${({ hasTopPadding }) => hasTopPadding ? '130px' : '30px'};
    padding-bottom: ${({ hasBottomPadding }) => hasBottomPadding ? '130px' : '30px'};
    font-size: 24px;
  }
  @media ${device.desktopL} {
    max-width: 780px;
    padding-top: ${({ hasTopPadding }) => hasTopPadding ? '140px' : '40px'};
    padding-bottom: ${({ hasBottomPadding }) => hasBottomPadding ? '140px' : '40px'};
    font-size: 28px;
  }
`