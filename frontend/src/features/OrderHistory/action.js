import {
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_FAIL,
  ORDER_HISTORY_SUCCESS,
} from './constant'
import * as api from '../../api/orders'

export const historyOrder = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_HISTORY_REQUEST })

  try {
    const {
      login: { userInfo },
    } = getState()

    const { data } = await api.orderHistory(userInfo.token)

    dispatch({ type: ORDER_HISTORY_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({ type: ORDER_HISTORY_FAIL, payload: message })
  }
}
