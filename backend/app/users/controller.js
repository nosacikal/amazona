const User = require('./model')
const bcrypt = require('bcrypt')
const data = require('../../data')
const generateToken = require('../utils/generate-token')

const seed = async (req, res) => {
  await User.deleteMany({})
  const users = await User.insertMany(data.users)

  res.send({ users })
}

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      })
      return
    }
  }
  res.status(401).send({ message: 'Invalid email or password' })
}

const register = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  })

  await user.save()

  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user),
  })
}

module.exports = {
  seed,
  login,
  register,
}
