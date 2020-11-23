const Order = require('./model')

const store = async (req, res) => {
  if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: 'Cart is empty' })
  } else {
    const order = new Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemPrice: req.body.itemPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    })

    await order.save()
    res.status(201).send({ message: 'New Order Created', order })
  }
}

const detailOrder = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    res.send(order)
  } else {
    res.status(404).send({ message: 'Order not found' })
  }
}

const orderPay = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    }
    await order.save()
    res.send({ message: 'Order Paid', order: order })
  } else {
    res.status(404).send({ message: 'Order not found' })
  }
}

const mine = async (req, res) => {
  const order = await Order.find({ user: req.user._id })
  res.send(order)
}

module.exports = {
  store,
  detailOrder,
  orderPay,
  mine,
}
