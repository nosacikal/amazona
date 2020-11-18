import { Link } from 'react-router-dom'
import { Rating } from '../../atoms'
import { ProductCard, ProductImage, ProductBody } from './ItemProductElements'

const ItemProduct = ({ product }) => {
  return (
    <ProductCard>
      <Link to={`/product/${product._id}`}>
        <ProductImage src={product.image} alt='product' />
      </Link>
      <ProductBody>
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating numReviews={product.numReviews} rating={product.rating} />
        <div>${product.price}</div>
      </ProductBody>
    </ProductCard>
  )
}

export default ItemProduct
