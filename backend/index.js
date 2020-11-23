const express = require('express')
const cors = require('cors')
const db = require('./database')
const PORT = process.env.PORT || 5000

const app = express()

const productRouter = require('./app/products/router')
const userRouter = require('./app/users/router')
const orderRouter = require('./app/orders/router')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.use((err, req, res, next) => {
  // if (err && err.name === 'ValidationError') {
  //   res.status(500).send({ message: err.message.split(': ')[2] })
  // }
  res.status(500).send({ message: err.message })
})

db.on('open', () => {
  console.log('Database Connected')
  app.listen(PORT, () => {
    console.log(`Server listen at PORT ${PORT}`)
  })
})

db.on('error', console.error.bind(console, 'Connection Error'))
