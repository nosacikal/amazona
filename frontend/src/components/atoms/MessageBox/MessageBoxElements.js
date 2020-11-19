import styled from 'styled-components'

export const MessageBoxElement = styled.div`
  padding: 1rem;
  border: 0.1rem solid transparent;
  border: 0.5rem;
  color: ${({ variant }) =>
    variant === 'danger'
      ? '#a02020'
      : variant === 'success'
      ? '#20a020'
      : ' #2020a0'};
  background-color: ${({ variant }) =>
    variant === 'danger' ? '#ffe0e0e0' : '#e0e0ff'};
  border-radius: 0.5rem;
`
