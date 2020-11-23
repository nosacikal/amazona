import React, { useEffect, useState } from 'react'
import { Gap, LoadingBox, MessageBox, OrderItems } from '../../components'
import {
  DetailOrderAction,
  DetailOrderContainer,
  DetailOrderInfo,
  DetailOrderItem,
  DetailOrderInfoPrice,
} from './DetailOrderElements'

import { useDispatch, useSelector } from 'react-redux'

import { detailOrder } from '../../features/OrderDetails/action'
import Axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { ORDER_PAY_RESET } from '../../features/OrderPay/constant'
import { payOrder } from '../../features/OrderPay/action'
import moment from 'moment'

const DetailOrder = (props) => {
  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()
  const orderId = props.match.params.id
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { error: errorPay, success: successPay, loading: loadingPay } = orderPay

  const addPaypalScript = async () => {
    const { data } = await Axios.get('/api/config/paypal')
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
    script.async = true
    script.onload = () => {
      setSdkReady(true)
    }

    document.body.appendChild(script)
  }

  useEffect(() => {
    if (!order || successPay || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch(detailOrder(orderId))
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPaypalScript()
        } else {
          setSdkReady(true)
        }
      }
    }
  }, [dispatch, order, orderId, successPay])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(order, paymentResult))
  }

  return (
    <main>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <DetailOrderContainer>
          <DetailOrderInfo>
            <DetailOrderItem>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {order.shippingAddress.fullName}
              </p>
              <Gap height={10} />
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address},{' '}
                {order.shippingAddress.postalCode}, {order.shippingAddress.city}
                , {order.shippingAddress.country}
              </p>
              <Gap height={10} />
              <div>
                <MessageBox variant={!order.isDelivered ? 'danger' : null}>
                  {!order.isDelivered
                    ? 'Not Delivered'
                    : `Delivered at ${order.deliveredAt}`}
                </MessageBox>
              </div>
            </DetailOrderItem>
            <Gap height={10} />
            <DetailOrderItem>
              <h2>Payment</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              <Gap height={10} />
              <div>
                <MessageBox variant={!order.isPaid ? 'danger' : 'success'}>
                  {!order.isPaid
                    ? 'Not Paid'
                    : `Paid at ${moment(order.paidAt).calendar()}`}
                </MessageBox>
              </div>
            </DetailOrderItem>
            <Gap height={10} />
            <DetailOrderItem>
              <ul>
                {order.orderItems.map((item) => (
                  <OrderItems key={item.product} item={item} />
                ))}
              </ul>
            </DetailOrderItem>
          </DetailOrderInfo>
          <DetailOrderAction>
            <DetailOrderItem>
              <h2>Order Summary</h2>
              <DetailOrderInfoPrice>
                <p>Items</p>
                <p>${order.itemPrice}</p>
              </DetailOrderInfoPrice>
              <Gap height={5} />
              <DetailOrderInfoPrice>
                <p>Shipping</p>
                <p>${order.shippingPrice}</p>
              </DetailOrderInfoPrice>
              <Gap height={5} />
              <DetailOrderInfoPrice>
                <p>Tax</p>
                <p>${order.taxPrice}</p>
              </DetailOrderInfoPrice>
              <Gap height={5} />
              <DetailOrderInfoPrice>
                <p>
                  <strong>Order Total</strong>
                </p>
                <p>${order.totalPrice}</p>
              </DetailOrderInfoPrice>
              <Gap height={30} />
              {!order.isPaid && (
                <div>
                  {!sdkReady ? (
                    <LoadingBox />
                  ) : (
                    <>
                      {errorPay && (
                        <MessageBox variant='danger'>{errorPay}</MessageBox>
                      )}
                      {loadingPay && <LoadingBox />}
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      />
                    </>
                  )}
                </div>
              )}
            </DetailOrderItem>
          </DetailOrderAction>
        </DetailOrderContainer>
      )}
    </main>
  )
}

export default DetailOrder
