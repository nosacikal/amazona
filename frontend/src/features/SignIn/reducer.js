import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from './constant'

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { loading: true }
    case SIGN_IN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case SIGN_IN_FAIL:
      return { loading: false, error: action.payload }
    case SIGN_OUT:
      return {}
    default:
      return state
  }
}

export default reducer
