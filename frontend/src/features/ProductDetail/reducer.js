import {
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from './constant'

const initialState = {
  loading: true,
  product: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true }
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default reducer
