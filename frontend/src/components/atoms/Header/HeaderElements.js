import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  background-color: #203040;
`
export const Brand = styled.div`
  padding: 1rem;
`

export const Link = styled(RouterLink)`
  font-size: 3rem;
  font-weight: bold;
`

export const HeaderMenu = styled.div`
  padding: 1rem;
`

export const HeaderItem = styled(RouterLink)`
  display: inline-block;
`

export const HeaderDropdownContent = styled.ul`
  display: none;
  position: absolute;
  background-color: #203040;
  right: 0;
  z-index: 1;
  min-width: 12rem;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0;
  grid-area: header;
`

export const HeaderDropdown = styled.div`
  display: inline-block;
  position: relative;

  &:hover ${HeaderDropdownContent} {
    display: block;
  }
`

export const CartTotal = styled.span`
  padding: 0.2rem 0.7rem;
  background-color: #f02020;
  border-radius: 50%;
  color: #fff;
  font-size: 1.4rem;
  margin-left: 0.4rem;
`
