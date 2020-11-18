import styled from 'styled-components'

export const ButtonElement = styled.button`
  padding: 1rem;
  width: ${({ full }) => (full ? '100%' : null)};
  border-radius: 0.5rem;
  border: 0.1rem solid #a4a4a4;
  font-size: 1.6rem;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? '#f0c040' : '#f8f8f8')};

  &:hover {
    border: 0.1rem solid #404040;
  }
`
