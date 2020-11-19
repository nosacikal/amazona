import { Link } from 'react-router-dom'
import {
  ProductAction,
  ProductDescription,
  ProductImage,
  ProductImageContainer,
  ProductRow,
} from './ProductElements'

import {
  ActionProduct,
  Gap,
  MessageBox,
  Rating,
  LoadingBox,
} from '../../components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailProduct } from '../../features/ProductDetail/action'

const Product = (props) => {
  const _id = props.match.params.id
  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)
  const { product, error, loading } = productDetail

  useEffect(() => {
    dispatch(getDetailProduct(_id))
  }, [_id, dispatch])

  return (
    <main>
      <Link to='/'>Back to result</Link>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
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
      )}
    </main>
  )
}

export default Product
