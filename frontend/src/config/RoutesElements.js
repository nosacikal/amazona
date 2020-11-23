import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr 5rem;
  height: 100%;
`
