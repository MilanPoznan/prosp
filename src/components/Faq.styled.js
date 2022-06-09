import styled from 'styled-components'

export const AccordionWrapper = styled.div`
 button {
    position: relative;
    display: block;
    text-align: left;
    width: 100%;
    padding: 1em 0;
    color: #7288a2;
    font-size: 1.15rem;
    font-weight: 400;
    border: none;
    background: none;
    outline: none;

    &:hover,
    &:focus {
      cursor: pointer;
      color: #03b5d2;

      &::after {
        cursor: pointer;
        color: #03b5d2;
        border: 1px solid #03b5d2;
      }
    }
  }
`

export const AccordionItem = styled.div`
border-bottom: 1px solid #e5e5e5;

button[aria-expanded='true'] {
  border-bottom: 1px solid #03b5d2;
}
`

