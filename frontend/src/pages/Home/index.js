import { ItemProduct } from '../../components'
import data from '../../data'
import { HomeContianer } from './HomeElements'

const Home = () => {
  return (
    <main>
      <h1>Featured Products</h1>
      <HomeContianer>
        {data.products.map((product) => (
          <ItemProduct key={product.name} product={product} />
        ))}
      </HomeContianer>
    </main>
  )
}

export default Home
