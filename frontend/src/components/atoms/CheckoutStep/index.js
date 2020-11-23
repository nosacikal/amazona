import { CheckoutStepContainer } from './CheckoutStepElements'
const CheckoutStep = (props) => {
  return (
    <CheckoutStepContainer>
      <div className={props.step1 ? 'active' : ''}>Sign In</div>
      <div className={props.step2 ? 'active' : ''}>Shipping</div>
      <div className={props.step3 ? 'active' : ''}>Payment</div>
      <div className={props.step4 ? 'active' : ''}>Place Order</div>
    </CheckoutStepContainer>
  )
}

export default CheckoutStep
