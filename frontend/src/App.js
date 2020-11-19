import { GlobalStyles } from './globalStyles'
import { Routes } from './config/Routes'
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Routes />
      </Provider>
    </>
  )
}

export default App
