import axios from 'axios'

export const createOrder = async (order, token) => {
  return await axios.post('/api/orders', order, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const detailOrder = async (id, token) => {
  return await axios.get(`/api/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const orderPay = async (id, paymentResult, token) =>
  await axios.put(`/api/orders/${id}/pay`, paymentResult, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

export const orderHistory = async (token) =>
  await axios.get('/api/orders/mine', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
