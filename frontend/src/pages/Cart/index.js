import { useEffect } from 'react'
import { ActionCart, CartItems, MessageBox } from '../../components'
import {
  CartRow,
  CartProductContainer,
  CartActionContainer,
} from './CartElements'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCart } from '../../features/Cart/action'
import { Link } from 'react-router-dom'

const Cart = (props) => {
  const id = props.match.params.id
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const removeCartHandler = (productId) => {
    dispatch(removeCart(productId))
  }

  useEffect(() => {
    if (id) dispatch(addToCart(id, qty))
  }, [dispatch, id, qty])

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping')
  }

  return (
    <main>
      <CartRow>
        <CartProductContainer>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to='/'>Go Shopping</Link>
            </MessageBox>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <CartItems
                  key={item.product}
                  item={item}
                  onChange={(e) =>
                    dispatch(addToCart(item.product, Number(e.target.value)))
                  }
                  onClick={() => removeCartHandler(item.product)}
                />
              ))}
            </ul>
          )}
        </CartProductContainer>
        <CartActionContainer>
          <ActionCart cartItems={cartItems} onClick={checkoutHandler} />
        </CartActionContainer>
      </CartRow>
    </main>
  )
}

export default Cart
