import { Button, Gap } from '../../atoms'
import { ActionCartContainer } from './CartActionElements'

const ActionCart = ({ cartItems, onClick }) => {
  return (
    <div>
      <Gap height={20} />
      <ActionCartContainer>
        <h1>
          Subtotal ({cartItems.length} Items): $
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h1>
        {cartItems.length > 0 ? (
          <Button full primary onClick={onClick}>
            Proceed to Checkout
          </Button>
        ) : (
          <Button full primary disabled>
            Proceed to Checkout
          </Button>
        )}
      </ActionCartContainer>
    </div>
  )
}

export default ActionCart
