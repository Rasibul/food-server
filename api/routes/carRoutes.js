const express = require('express')
const Carts = require('../models/Cart')
const router = express.Router()

const cartControler = require('../controlers/cartControler')
const verifyToken = require('../middelware/verifyToken')


// all rotues
router.get('/',verifyToken, cartControler.getCartByEmail)
router.post('/', cartControler.addToCart)
router.delete('/:id', cartControler.deleteCart)
router.put('/:id', cartControler.updateCart)
router.get('/:id', cartControler.getSingleCart)


module.exports = router;