const Product = require('./model')
const data = require('../../data')

const seed = async (req, res, next) => {
  try {
    await Product.deleteMany({})
    const product = await Product.insertMany(data.products)

    res.send({ product })
  } catch (error) {
    next()
  }
}

const index = async (req, res) => {
  const product = await Product.find()

  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product not found' })
  }
}

const detailProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product not found' })
  }
}

module.exports = {
  seed,
  index,
  detailProduct,
}
