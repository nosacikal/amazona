const router = require('express').Router()
const productController = require('./controller')
const expressAsyncHandler = require('express-async-handler')

router.get('/', expressAsyncHandler(productController.index))
router.get('/seed', expressAsyncHandler(productController.seed))
router.get('/:id', expressAsyncHandler(productController.detailProduct))

module.exports = router
