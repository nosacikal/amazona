import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from './constant'
import * as api from '../../api/users'

export const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: SIGN_IN_REQUEST, payload: { email, password } })

  try {
    const { data } = await api.login(email, password)

    dispatch({ type: SIGN_IN_SUCCESS, payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    const message = error.response ? error.response.data.message : error.message

    dispatch({ type: SIGN_IN_FAIL, payload: message })
  }
}

export const signOut = () => async (dispatch) => {
  dispatch({ type: SIGN_OUT })
  localStorage.removeItem('userInfo')
  localStorage.removeItem('shippingAddress')
  localStorage.removeItem('paymentMethod')
}
