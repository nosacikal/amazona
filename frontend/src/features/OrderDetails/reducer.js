import {
  ORDER_DETAIL_FAIL,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
} from './constant'

const initialState = {
  loading: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_DETAIL_REQUEST:
      return { loading: true }
    case ORDER_DETAIL_SUCCESS:
      return { loading: false, order: action.payload }
    case ORDER_DETAIL_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export default reducer
