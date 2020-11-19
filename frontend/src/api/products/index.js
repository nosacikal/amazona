import axios from 'axios'

export const getProducts = async () => await axios.get('/api/products')

export const getDetailProduct = async (id) =>
  await axios.get(`/api/products/${id}`)
