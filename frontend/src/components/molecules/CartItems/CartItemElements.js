import styled from 'styled-components'

export const CartItemList = styled.li`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
`
export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  select {
    display: inline-block;
  }
`

export const CartImage = styled.img`
  max-width: 5rem;
  width: 100%;
`

export const CartName = styled.div`
  min-width: 30rem;
`
