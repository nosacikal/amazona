import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../components'
import { signOut } from '../features/SignIn/action'
import {
  Cart,
  Home,
  Payment,
  PlaceOrder,
  Product,
  Register,
  SignIn,
  DetailOrder,
  OrderHistory,
} from '../pages'

import Shipping from '../pages/Shipping'
import { GridContainer } from './RoutesElements'

export const Routes = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const userInfo = useSelector((state) => state.login.userInfo)
  const dispatch = useDispatch()

  const signOutHandler = () => {
    dispatch(signOut())
  }

  return (
    <Router>
      <GridContainer>
        <Header
          cartItems={cartItems}
          userInfo={userInfo}
          onClick={signOutHandler}
        />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product/:id' component={Product} />
          <Route path={`/cart/:id?`} component={Cart} />
          <Route path={`/signin`} component={SignIn} />
          <Route path={`/register`} component={Register} />
          <Route path={`/shipping`} component={Shipping} />
          <Route path={`/payment`} component={Payment} />
          <Route path={`/placeorder`} component={PlaceOrder} />
          <Route path={`/order/:id`} component={DetailOrder} />
          <Route path={`/order-history`} component={OrderHistory} />
          <Route>
            <main>
              <div>Page Not Found</div>
            </main>
          </Route>
        </Switch>
        <Footer />
      </GridContainer>
    </Router>
  )
}
