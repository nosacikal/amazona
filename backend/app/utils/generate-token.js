const config = require('../config')
const jwt = require('jsonwebtoken')

const generateToken = (user) => {
  const data = {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  }

  return jwt.sign(data, config.secretKey, {
    expiresIn: '30d',
  })
}

module.exports = generateToken
