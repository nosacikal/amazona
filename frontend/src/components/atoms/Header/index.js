import {
  Brand,
  HeaderContainer,
  HeaderItem,
  HeaderMenu,
  Link,
  CartTotal,
  HeaderDropdown,
  HeaderDropdownContent,
} from './HeaderElements'

const Header = ({ cartItems, userInfo, onClick }) => {
  return (
    <div>
      <HeaderContainer>
        <Brand>
          <Link to='/'>amazona</Link>
        </Brand>
        <HeaderMenu>
          <HeaderItem to='/cart'>
            Cart
            {cartItems.length > 0 && <CartTotal>{cartItems.length}</CartTotal>}
          </HeaderItem>
          {userInfo ? (
            <HeaderDropdown>
              <HeaderItem to='#'>
                {userInfo.name} <i className='fa fa-caret-down'></i>
              </HeaderItem>
              <HeaderDropdownContent>
                <HeaderItem to='/order-history'>Order History</HeaderItem>
                <HeaderItem to='/signin'>User Profile</HeaderItem>
                <HeaderItem to='/signin' onClick={onClick}>
                  Sign-Out
                </HeaderItem>
              </HeaderDropdownContent>
            </HeaderDropdown>
          ) : (
            <HeaderItem to='/signin'>Sign-In</HeaderItem>
          )}
        </HeaderMenu>
      </HeaderContainer>
    </div>
  )
}

export default Header
