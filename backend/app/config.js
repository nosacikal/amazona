const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbAuth: process.env.DB_AUTH,
  secretKey: process.env.SECRET_KEY,
}
