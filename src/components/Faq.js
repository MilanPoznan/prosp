import React, { useEffect, useRef } from 'react'
import './faq.scss'
import { ContentWrapper, Heading2 } from '../styles/globalComponents.styled'

export default function Faq({ data }) {

  console.log(data)

  const { faqRepeater } = data

  const items = useRef([]);
  function toggleAccordion(e, index) {

    items.current.forEach((item, i) => i === index
      ? item.setAttribute('aria-expanded', 'true')
      : item.setAttribute('aria-expanded', 'false'))

  }

  useEffect(() => {
    // items.forEach(item => item.addEventListener('click', toggleAccordion));


  }, [])

  return (
    <ContentWrapper>
      <div class="accordion">
        <Heading2>FAQ</Heading2>
        {
          faqRepeater.map((item, index) => {
            return (<div class="accordion-item" key={index}>
              <button
                ref={(el) => items.current[index] = el}
                onClick={(e) => toggleAccordion(e, index)}
                id="accordion-button-1" aria-expanded="false"><span class="accordion-title">{item.title}</span><span class="icon" aria-hidden="true"></span></button>
              <div class="accordion-content">
                <p>{item.text}</p>
              </div>
            </div>)
          })
        }
      </div>
    </ContentWrapper>
  )
}
