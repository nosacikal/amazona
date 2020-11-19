import axios from 'axios'

export const login = async (email, password) =>
  await axios.post('/api/users/signin', { email, password })

export const register = async (name, email, password) =>
  await axios.post('/api/users/register', { name, email, password })
