const router = require('express').Router()
const multer = require('multer')
const userController = require('./controller')
const expressAsyncHandler = require('express-async-handler')

router.get('/seed', expressAsyncHandler(userController.seed))
router.post(
  '/signin',
  multer().none(),
  expressAsyncHandler(userController.login)
)
router.post(
  '/register',
  multer().none(),
  expressAsyncHandler(userController.register)
)

module.exports = router
