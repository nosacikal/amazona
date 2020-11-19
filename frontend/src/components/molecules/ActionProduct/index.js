import { useState } from 'react'
import { Button, Gap } from '../../atoms'
import {
  ActionProductContainer,
  Price,
  Status,
  ActionWrapper,
} from './ProductActionElements'

const ActionProduct = ({ product, addToCartHandler }) => {
  const [qty, setQty] = useState(1)

  return (
    <div>
      <Gap height={10} />
      <ActionProductContainer>
        <ActionWrapper>
          <p>Price</p>
          <Price>$60</Price>
        </ActionWrapper>
        <Gap height={10} />
        <ActionWrapper>
          <p>Status</p>
          <Status status={product.countInStock}>
            {product.countInStock ? 'In Stock' : 'Out of stock'}
          </Status>
        </ActionWrapper>
        <Gap height={10} />
        {!product.countInStock ? null : (
          <ActionWrapper>
            <p>Qty</p>
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
              {[...Array(product.countInStock).keys()].map((p) => (
                <option key={p + 1} value={p + 1}>
                  {p + 1}
                </option>
              ))}
            </select>
          </ActionWrapper>
        )}
        <Gap height={20} />
        {product.countInStock > 0 ? (
          <Button
            full
            primary
            disabled={!product.countInStock}
            onClick={() => addToCartHandler(product._id, qty)}
          >
            Add To Cart
          </Button>
        ) : null}
      </ActionProductContainer>
    </div>
  )
}

export default ActionProduct
