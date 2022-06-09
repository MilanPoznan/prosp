import React from 'react'
import { graphql } from 'gatsby'
import '../styles/normalize.css'
import { theme } from '../styles/globalTheme'

import { ThemeProvider } from 'styled-components';

import Space from '../components/Space'
import Team from '../components/Team'
import PageHero from '../components/Hero'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import About from '../components/About'
import FullWidthImage from '../components/FullWidthImage';
import Faq from '../components/Faq';
import CtaComponent from '../components/CtaComponent';


export default function Page({ data }) {

  const { wpPage: { flexibleSiteContent } } = data
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        {
          flexibleSiteContent.flexContent.map((component, index) => {
            switch (component.fieldGroupName) {
              case "Page_Flexiblesitecontent_FlexContent_HeroSection":
                return <PageHero data={component} key={index} />
              case "Page_Flexiblesitecontent_FlexContent_About":
                return <About data={component} key={index} />
              case "Page_Flexiblesitecontent_FlexContent_FullWidthImage":
                return <FullWidthImage image={component.image} />
              case "Page_Flexiblesitecontent_FlexContent_TeamMemebers":
                return <Team data={component} key={index} />
              case "Page_Flexiblesitecontent_FlexContent_CtaComponent":
                return <CtaComponent data={component} key={index} />
              case "Page_Flexiblesitecontent_FlexContent_Faq":
                return <Faq data={component} key={index} />
              default:
                return null
            }
          })
        }
        {/* <Navigation /> */}

      </>
    </ThemeProvider>
  )
}

export const flexibleContentQuery = graphql`query pageByID($id: String!) {
  wpPage(id: {eq: $id}) {
      flexibleSiteContent {
        flexContent {
          ... on WpPage_Flexiblesitecontent_FlexContent_Faq {
            fieldGroupName
            faqRepeater {
              text
              title
            }
          }
          ... on WpPage_Flexiblesitecontent_FlexContent_CtaComponent {
          buttonText
          buttonUrl
          fieldGroupName
          hasBottomPadding
          hasTopPadding
          label
          title
        }
          ... on WpPage_Flexiblesitecontent_FlexContent_TeamMemebers {
            fieldGroupName
            teamRepeater {
            image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            role
            title
            twtitter
            }
          }
          ... on WpPage_Flexiblesitecontent_FlexContent_FullWidthImage {
            fieldGroupName
            image {
              sourceUrl
            }
          }
          ... on WpPage_Flexiblesitecontent_FlexContent_About {
            content
            fieldGroupName
            subtitle
            title
            imageRepeater {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        ... on WpPage_Flexiblesitecontent_FlexContent_HeroSection {
          fieldGroupName
            subtitle
            title
            image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          }
          
        }
      }
  }
}
`