const mongoose = require('mongoose')

const {
  dbUser,
  dbPass,
  dbHost,
  dbPost,
  dbName,
  dbAuth,
} = require('../app/config')

mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPost}/${dbName}?authSource=${dbAuth}`,
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
)

const db = mongoose.connection

module.exports = db
