import {
  ORDER_ITEM_FAIL,
  ORDER_ITEM_REQUEST,
  ORDER_ITEM_RESET,
  ORDER_ITEM_SUCCESS,
} from './constant'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_ITEM_REQUEST:
      return { loading: true }
    case ORDER_ITEM_SUCCESS:
      return { loading: false, success: true, order: action.payload }
    case ORDER_ITEM_FAIL:
      return { loading: false, error: action.payload }
    case ORDER_ITEM_RESET:
      return {}
    default:
      return state
  }
}

export default reducer
