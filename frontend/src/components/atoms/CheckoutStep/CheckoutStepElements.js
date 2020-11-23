import styled from 'styled-components'

export const CheckoutStepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  flex-wrap: wrap;
  align-items: flex-start;

  & > div {
    border-top: 0.3rem solid #c0c0c0;
    color: #c0c0c0;
    flex: 1;
    padding: 1rem;
    font-weight: bold;
  }

  & > div.active {
    border-top-color: #f08000;
    color: #f08000;
  }
`
