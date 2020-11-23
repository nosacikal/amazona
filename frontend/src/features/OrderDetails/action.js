import {
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_FAIL,
  ORDER_DETAIL_SUCCESS,
} from './constant'
import * as api from '../../api/orders'

export const detailOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAIL_REQUEST, payload: orderId })

  try {
    const {
      login: { userInfo },
    } = getState()

    const { data } = await api.detailOrder(orderId, userInfo.token)

    dispatch({ type: ORDER_DETAIL_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({ type: ORDER_DETAIL_FAIL, payload: message })
  }
}
