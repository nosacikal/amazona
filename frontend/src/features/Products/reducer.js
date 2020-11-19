import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from './constant'

const initialState = {
  loading: true,
  products: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true }
    case GET_PRODUCT_SUCCESS:
      return { loading: false, products: action.payload }
    case GET_PRODUCT_FAIL:
      return { loading: false, error: 'Product Not Found' }
    default:
      return state
  }
}

export default reducer
