import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from './constant'
import * as api from '../../api/users'
import { SIGN_IN_SUCCESS } from '../SignIn/constant'

export const createUser = (name, email, password) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST, payload: { name, email, password } })

  try {
    const { data } = await api.register(name, email, password)

    dispatch({ type: REGISTER_SUCCESS, payload: data })

    dispatch({ type: SIGN_IN_SUCCESS, payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    const message = error.response ? error.response.data.message : error.message

    dispatch({ type: REGISTER_FAIL, payload: message })
  }
}
