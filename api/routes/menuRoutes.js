const express = require('express')
const Menu = require('../models/Menu')
const router = express.Router()
const menuControlers = require('../controlers/menuControler')

// get all menu item

router.get('/', menuControlers.getAllMenuItems)

// post new meni item

router.post('/',menuControlers.postMenuItem)

module.exports = router