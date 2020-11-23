import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import productReducer from '../features/Products/reducer'
import productDetailReducer from '../features/ProductDetail/reducer'
import cartReducer from '../features/Cart/reducer'
import signInReducer from '../features/SignIn/reducer'
import registerReducer from '../features/Register/reducer'
import orderCreateReducer from '../features/OrderItems/reducer'
import orderDetailReducer from '../features/OrderDetails/reducer'
import orderPayReducer from '../features/OrderPay/reducer'
import orderHistoryReducer from '../features/OrderHistory/reducer'

import thunk from 'redux-thunk'

const rootReducers = combineReducers({
  products: productReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  login: signInReducer,
  register: registerReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailReducer,
  orderPay: orderPayReducer,
  orderHistory: orderHistoryReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)))

export default store
