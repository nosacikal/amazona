const router = require('express').Router()
const orderController = require('./controller')
const expressAsyncHandler = require('express-async-handler')
const isAuth = require('../utils/auth-user')

router.post('/', isAuth, expressAsyncHandler(orderController.store))
router.get('/mine', isAuth, expressAsyncHandler(orderController.mine))
router.get('/:id', isAuth, expressAsyncHandler(orderController.detailOrder))
router.put('/:id/pay', isAuth, expressAsyncHandler(orderController.orderPay))
module.exports = router
