import { Link } from 'react-router-dom'
import { Button } from '../../atoms'
import {
  CartImage,
  CartItemList,
  CartName,
  ItemWrapper,
} from './CartItemElements'

const CartItems = ({ item, onChange, onClick }) => {
  return (
    <>
      <CartItemList>
        <ItemWrapper>
          <div>
            <CartImage src={item.image} alt='product' />
          </div>
          <CartName>
            <Link to='/'>{item.name}</Link>
          </CartName>
          <div>
            <select value={item.qty} onChange={onChange}>
              {[...Array(item.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <div>${item.price}</div>
          <div>
            <Button onClick={onClick}>Delete</Button>
          </div>
        </ItemWrapper>
      </CartItemList>
    </>
  )
}

export default CartItems
