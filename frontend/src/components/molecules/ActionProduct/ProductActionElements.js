import styled from 'styled-components'

export const ActionProductContainer = styled.div`
  border: 0.1rem solid #c0c0c0;
  padding: 1rem;
  border-radius: 0.5rem;
`

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Price = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
`

export const Status = styled.p`
  color: ${({ status }) => (status ? '#20a020' : 'red')};
`
