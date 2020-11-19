import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from './constant'
import * as api from '../../api/products'

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST })
    const { data } = await api.getProducts()

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL })
  }
}
