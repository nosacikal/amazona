import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, CheckoutStep, Gap, Radio } from '../../components'
import { savePaymentMethod } from '../../features/Cart/action'

import { PaymentForm } from './PaymentElements'

const Payment = (props) => {
  const shippingAddress = useSelector((state) => state.cart.shippingAddress)

  if (!shippingAddress.address) {
    props.history.push('/shipping')
  }

  const dispatch = useDispatch()

  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))

    props.history.push('/placeorder')
  }

  return (
    <div>
      <CheckoutStep step1 step2 step3 />
      <PaymentForm onSubmit={submitHandler}>
        <h1>Payment Method</h1>
        <Radio
          id='paypal'
          value='Paypal'
          name='paymentMethod'
          checked={true}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <Gap height={20} />
        <Radio
          id='stripe'
          value='Stripe'
          name='paymentMethod'
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <Gap height={30} />
        <Button full primary>
          Continue
        </Button>
      </PaymentForm>
    </div>
  )
}

export default Payment
