import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { device } from "../styles/mediaQueries";


const createCssTransitions = () => {
  let styles = ''

  for (let i = 0; i < 20; i++) {
    styles += `:nth-child(${i + 1}) {
      transition-delay: ${0.008 * i}s;
    }`
  }

  return styles
}


const ButtonLink = styled.a`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${({ width }) => width ? `${width}px` : '100%'};
  padding: 28px 0;
  transition: background-color .3s, color .3s, border .3s;
  font-family: 'PMGroteskBold';
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme, type }) => type === 'filled' ? theme.colors.white : theme.colors.black};
  background-color: ${({ theme, type }) => type === 'filled' ? theme.colors.accent_primary : ''};
  border: ${({ theme, type }) => type === 'ghost' ? `1px solid ${theme.colors.black}` : 'none'};
  text-decoration: none;
  text-transform: uppercase;

  span {
    display: inline-block;
    transition: transform .6s cubic-bezier(0.76, 0, 0.24, 1);
    ${createCssTransitions()}
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.accent_primary};
    color: ${({ theme, type }) => type === 'ghost' && theme.colors.white};
    border: ${({ theme, type }) => type === 'ghost' ? `1px solid ${theme.colors.accent_primary}` : 'none'};
    span {
      transform: translateY(-100%);
    }
  }
`

const ButtonText = styled.div`
  height: 12px;
  overflow: hidden;
`

const LinkWrapper = styled.div`
  margin-bottom: 20px;
  font-family: 'BRegular';
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  cursor: pointer;
  a {
    display: inline-block;
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    transition: transform .2s;
    :hover {
      transform: translateX(10px);
    }
  }
  :last-of-type {
    margin-bottom: 0;
  }
  @media ${device.tablet} {
    margin-bottom: 37px;
  }
  @media ${device.desktopS} {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 0;
    font-family: 'PMGrotesk';
    font-size: 14px;
    line-height: 15px;
    a {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 15px;
      white-space: nowrap;
      :hover {
        transform: none;
      }
      :before {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: background-color .3s;
        content: '';
      }
      :hover {
        :before {
          background-color: ${({ theme }) => theme.colors.accent_secondary};
        }
      }
    }
  }
  @media ${device.desktop} {
    a {
      padding: 0 20px;
    }
  }
`


export default function CtaButton({ buttonTitle, buttonUrl, type, width }) {

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      let innerText = buttonTitle.split('')
      let textContainer = document.createElement('div');

      // creating span for each charachter in a btn label and appending it to container
      innerText.forEach((letter) => {
        let span = document.createElement('span');
        span.innerText = letter.trim() === '' ? '\xa0' : letter;
        textContainer.appendChild(span);
      })

      textRef.current.appendChild(textContainer);
      textRef.current.appendChild(textContainer.cloneNode(true));
    }
  }, [type])

  return (
    type === 'nav'
      ? <LinkWrapper>
        <a
          href={buttonUrl}
          target="_blank"
          rel="noreferrer"
        >
          {buttonTitle}
        </a>
      </LinkWrapper>
      : <ButtonLink
        type={type}
        width={width}
        href={buttonUrl}
        target="_blank"
        rel="noreferrer"
      >
        <ButtonText ref={textRef} />
      </ButtonLink>
  )
}
