const express = require('express')
const Carts = require('../models/Cart')
const router = express.Router()

const cartControler = require('../controlers/cartControler')


// all rotues
router.get('/', cartControler.getCartByEmail)
router.post('/', cartControler.addToCart)
router.delete('/:id', cartControler.deleteCart)
router.put('/:id', cartControler.updateCart)
router.get('/:id', cartControler.getSingleCart)


module.exports = router;