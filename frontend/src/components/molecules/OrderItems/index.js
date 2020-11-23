import { Link } from 'react-router-dom'
import {
  OrderImage,
  OrderItemList,
  OrderName,
  ItemWrapper,
} from './OrderItemElements'

const OrderItems = ({ item }) => {
  return (
    <OrderItemList>
      <ItemWrapper>
        <div>
          <OrderImage src={item.image} alt='product' />
        </div>
        <OrderName>
          <Link to='/'>{item.name}</Link>
        </OrderName>
        <div>{`${item.qty} x $${item.price} = $${item.qty * item.price}`}</div>
      </ItemWrapper>
    </OrderItemList>
  )
}

export default OrderItems
