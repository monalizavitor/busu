const UserController = require('../controller/userController')
const authentication = require('../auth/auth')

const express = require('express')
const router = express.Router()


// rota para cadastro
router.post('/signup', UserController.signUp)

// rota para login
router.post('/signin', UserController.signIn)


// rota para deletar user
router.delete('/delete/:id', authentication.auth, UserController.deleteUser)


module.exports = router


