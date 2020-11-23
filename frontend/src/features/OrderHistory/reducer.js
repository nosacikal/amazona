import {
  ORDER_HISTORY_FAIL,
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_SUCCESS,
} from './constant'

const initialState = { orders: [] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_HISTORY_REQUEST:
      return { loading: true }
    case ORDER_HISTORY_SUCCESS:
      return { loading: false, orders: action.payload }
    case ORDER_HISTORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default reducer
