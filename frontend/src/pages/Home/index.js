import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ItemProduct, LoadingBox } from '../../components'
import { getProducts } from '../../features/Products/action'
import { HomeContianer } from './HomeElements'

const Home = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.products)
  const { products, loading, error } = productList

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <main>
      <h1>Featured Products</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        'Error'
      ) : (
        <HomeContianer>
          {products.map((product) => (
            <ItemProduct key={product._id} product={product} />
          ))}
        </HomeContianer>
      )}
    </main>
  )
}

export default Home
