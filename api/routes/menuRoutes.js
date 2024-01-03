const express = require('express')
const Menu = require('../models/Menu')
const router = express.Router()
const menuControlers = require('../controlers/menuControler')

// get all menu item

router.get('/', menuControlers.getAllMenuItems)

// post new meni item

router.post('/', menuControlers.postMenuItem)

// delete menu item

router.delete('/:id', menuControlers.deleteMenuItem);

// singel menu item

router.get('/:id',menuControlers.singelMenuItem)

// update single menu item

router.patch('/:id', menuControlers.updateMenuItem)

module.exports = router