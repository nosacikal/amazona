const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
})

userSchema.path('email').validate(
  async function (value) {
    try {
      const count = await this.model('User').countDocuments({ email: value })

      return !count
    } catch (error) {
      throw error
    }
  },
  (attr) => `${attr.value} is already registered`
)

userSchema.path('email').validate(
  function (value) {
    const EMAIL_RE = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    return EMAIL_RE.test(this.email)
  },
  (attr) => `${attr.value} is invalid email`
)

module.exports = model('User', userSchema)
