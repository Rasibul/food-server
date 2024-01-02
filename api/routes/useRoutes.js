const express = require('express')
const router = express.Router()
const userControler = require('../controlers/userControler')
const verifyToken = require('../middelware/verifyToken')
const verifyAdmin = require('../middelware/verifyAdmin')

router.get('/', verifyToken, verifyAdmin, userControler.getAllUsers)
router.post('/', userControler.createUser)
router.delete('/:id', verifyToken, verifyAdmin, userControler.deleteUser)
router.get('/admin/:email', verifyToken, userControler.getAdmin)
router.patch('/admin/:id', verifyToken, verifyAdmin, userControler.makeAdmin)

module.exports = router