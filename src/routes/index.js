const { Router } = require('express')
const router = Router()

const CheckoutController = require('../controllers/CheckoutController')
const checkoutController = new CheckoutController()

router.post('/boleto', checkoutController.boleto)

module.exports = router
