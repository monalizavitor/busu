const UserController = require('../controller/userController')
const express = require('express')
const router = express.Router()



router.post('/signup', UserController.signUp)

router.post('/signin', UserController.signIn)

router.get('/all', UserController.getAll)


module.exports = router


