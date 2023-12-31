const express = require('express')
const Menu = require('../models/Menu')
const router = express.Router()
const menuControlers = require('../controlers/menuControler')

// get all menu item

router.get('/', menuControlers.getAllMenuItem)

module.exports = router