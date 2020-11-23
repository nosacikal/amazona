import {
  ORDER_ITEM_REQUEST,
  ORDER_ITEM_FAIL,
  ORDER_ITEM_SUCCESS,
} from './constant'
import * as api from '../../api/orders'

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_ITEM_REQUEST, order })

  try {
    const {
      login: { userInfo },
    } = getState()

    const { data } = await api.createOrder(order, userInfo.token)

    dispatch({ type: ORDER_ITEM_SUCCESS, payload: data })

    localStorage.removeItem('cartItems')
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({ type: ORDER_ITEM_FAIL, payload: message })
  }
}
