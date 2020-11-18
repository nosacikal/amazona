import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../components'
import { Home } from '../pages'
import { GridContainer } from './RoutesElements'

export const Routes = () => {
  return (
    <Router>
      <GridContainer>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Footer />
      </GridContainer>
    </Router>
  )
}
