import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../components'
import { Home, Product } from '../pages'
import { GridContainer } from './RoutesElements'

export const Routes = () => {
  return (
    <Router>
      <GridContainer>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product/:id' component={Product} />
        </Switch>
        <Footer />
      </GridContainer>
    </Router>
  )
}
