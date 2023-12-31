const express = require('express')
const router = express.Router()
const userControler = require('../controlers/userControler')

router.get('/', userControler.getAllUser)
router.post('/', userControler.createUser)
router.delete('/:id', userControler.deleteUser)
router.get('/admin/:email', userControler.getAdmin)
router.patch('/admin/:id', userControler.makeAdmin)

module.exports = router