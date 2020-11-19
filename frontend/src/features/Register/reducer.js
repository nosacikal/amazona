import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from './constant'

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true }
    case REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default reducer
