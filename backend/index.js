const express = require('express')
const cors = require('cors')
const db = require('./database')
const PORT = process.env.PORT || 5000

const app = express()

const productRouter = require('./app/products/router')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productRouter)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

db.on('open', () => {
  console.log('Database Connected')
  app.listen(PORT, () => {
    console.log(`Server listen at PORT ${PORT}`)
  })
})

db.on('error', console.error.bind(console, 'Connection Error'))
