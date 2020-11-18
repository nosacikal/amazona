import { Link } from 'react-router-dom'
import data from '../../data'
import {
  ProductAction,
  ProductDescription,
  ProductImage,
  ProductImageContainer,
  ProductRow,
} from './ProductElements'

import { ActionProduct, Gap, Rating } from '../../components'

const Product = (props) => {
  const _id = props.match.params.id

  const product = data.products.find((product) => product._id === Number(_id))

  return (
    <main>
      <Link to='/'>Back to result</Link>
      <ProductRow>
        <ProductImageContainer>
          <ProductImage src={product.image} alt='product' />
        </ProductImageContainer>
        <ProductDescription>
          <h1>{product.name}</h1>
          <Rating numReviews={product.numReviews} rating={product.rating} />
          <Gap height={10} />
          <p>Price: ${product.price}</p>
          <Gap height={10} />
          <p>Description:</p>
          <Gap height={10} />
          <p>{product.description}</p>
        </ProductDescription>
        <ProductAction>
          <ActionProduct product={product} />
        </ProductAction>
      </ProductRow>
    </main>
  )
}

export default Product
