import React, { useEffect } from 'react'
import {
  Button,
  CheckoutStep,
  Gap,
  LoadingBox,
  MessageBox,
  OrderItems,
} from '../../components'
import {
  PlaceOrderAction,
  PlaceOrderContainer,
  PlaceOrderInfo,
  PlaceOrderItem,
  PlaceOrderInfoPrice,
} from './PlaceOrderElements'

import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../features/OrderItems/action'
import { ORDER_ITEM_RESET } from '../../features/OrderItems/constant'

const PlaceOrder = (props) => {
  const userInfo = useSelector((state) => state.login.userInfo)

  const cart = useSelector((state) => state.cart)
  const { cartItems, shippingAddress, paymentMethod } = cart

  const orderCreate = useSelector((state) => state.orderCreate)
  const { loading, success, error, order } = orderCreate

  if (!paymentMethod) {
    props.history.push('/signin')
  }

  if (!userInfo) {
    props.history.push('/')
  }

  const toPrice = (num) => Number(num.toFixed(2))

  cart.itemPrice = toPrice(cartItems.reduce((a, c) => a + c.qty * c.price, 0))
  cart.shippingPrice = cart.itemPrice > 100 ? toPrice(0) : toPrice(10)
  cart.taxPrice = toPrice(0.1 * cart.itemPrice)
  cart.totalPrice = cart.itemPrice + cart.shippingPrice + cart.taxPrice

  const dispatch = useDispatch()

  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cartItems }))
  }

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order.order._id}`)
      dispatch({ type: ORDER_ITEM_RESET })
    }
  }, [dispatch, order, props.history, success])

  return (
    <main>
      <CheckoutStep step1 step2 step3 step4 />
      <PlaceOrderContainer>
        <PlaceOrderInfo>
          <PlaceOrderItem>
            <h2>Shipping</h2>
            <p>
              <strong>Name: </strong>
              {shippingAddress.fullName}
            </p>
            <Gap height={10} />
            <p>
              <strong>Address: </strong>
              {`${shippingAddress.address}, ${shippingAddress.postalCode}, ${shippingAddress.city}, ${shippingAddress.country}`}
            </p>
          </PlaceOrderItem>
          <Gap height={10} />
          <PlaceOrderItem>
            <h2>Payment</h2>
            <p>
              <strong>Method: </strong>
              {paymentMethod}
            </p>
          </PlaceOrderItem>
          <Gap height={10} />
          <PlaceOrderItem>
            <ul>
              {cartItems.map((item) => (
                <OrderItems key={item.product} item={item} />
              ))}
            </ul>
          </PlaceOrderItem>
        </PlaceOrderInfo>
        <PlaceOrderAction>
          <PlaceOrderItem>
            <h2>Order Summary</h2>
            <PlaceOrderInfoPrice>
              <p>Items</p>
              <p>${cart.itemPrice}</p>
            </PlaceOrderInfoPrice>
            <Gap height={5} />
            <PlaceOrderInfoPrice>
              <p>Shipping</p>
              <p>${cart.shippingPrice}</p>
            </PlaceOrderInfoPrice>
            <Gap height={5} />
            <PlaceOrderInfoPrice>
              <p>Tax</p>
              <p>${cart.taxPrice}</p>
            </PlaceOrderInfoPrice>
            <Gap height={5} />
            <PlaceOrderInfoPrice>
              <p>
                <strong>Order Total</strong>
              </p>
              <p>${cart.totalPrice}</p>
            </PlaceOrderInfoPrice>
            <Gap height={10} />
            <Button full primary onClick={placeOrderHandler}>
              Place Order
            </Button>
          </PlaceOrderItem>
          {loading && <LoadingBox />}
          {error && <MessageBox variant='danger'> error</MessageBox>}
        </PlaceOrderAction>
      </PlaceOrderContainer>
    </main>
  )
}

export default PlaceOrder
