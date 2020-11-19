import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../components'
import { signOut } from '../features/SignIn/action'
import { Cart, Home, Product, Register, SignIn } from '../pages'
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
          <Route>
            <p>Page Not Found</p>
          </Route>
        </Switch>
        <Footer />
      </GridContainer>
    </Router>
  )
}
