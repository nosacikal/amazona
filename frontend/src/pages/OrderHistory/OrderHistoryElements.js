import styled from 'styled-components'

export const Table = styled.table`
  width: 98%;
  border-collapse: collapse;
  margin: 0 auto;

  button {
    margin: 0 0.2rem;
  }

  tr:nth-of-type(odd) {
    background-color: #f4f4f4;
  }
`

export const TableHeader = styled.th`
  text-align: left;
  border: 0.1rem solid #e4e4e4;
  padding: 0.5rem;
`

export const TableData = styled.td`
  text-align: left;
  border: 0.1rem solid #e4e4e4;
  padding: 0.5rem;
`
