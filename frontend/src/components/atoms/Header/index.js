import {
  Brand,
  HeaderContainer,
  HeaderItem,
  HeaderMenu,
  Link,
  HeaderDropdown,
  HeaderDropdownContent,
} from './HeaderElements'

const Header = () => {
  return (
    <HeaderContainer>
      <Brand>
        <Link to='/'>amazona</Link>
      </Brand>
      <HeaderMenu>
        <HeaderItem to='/cart'>Cart</HeaderItem>
        {/* <HeaderDropdown>
          <HeaderItem to='#'>
            Nosa <i className='fa fa-caret-down'></i>
          </HeaderItem>
          <HeaderDropdownContent>
            <HeaderItem to='/signin'>Order History</HeaderItem>
            <HeaderItem to='/signin'>User Profile</HeaderItem>
            <HeaderItem to='/signin'>Sign-Out</HeaderItem>
          </HeaderDropdownContent>
        </HeaderDropdown> */}
        <HeaderItem to='/signin'>Sign-In</HeaderItem>
      </HeaderMenu>
    </HeaderContainer>
  )
}

export default Header
