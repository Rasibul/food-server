const express = require('express')
const router = express.Router()
const userControler = require('../controlers/userControler')

router.get('/', userControler.getAllUser)
router.post('/', userControler.createUser)
router.delete('/:id', userControler.deleteUser)

module.exports = router