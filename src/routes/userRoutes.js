const UserController = require('../controller/userController')
const authentication = require('../auth/auth')

const express = require('express')
const router = express.Router()


// rota para cadastro
router.post('/user/signup', UserController.signUp)


// rota para login
router.post('/user/signin', UserController.signIn)


// rota para deletar user
router.delete('/user/delete/:id', authentication.auth, UserController.deleteUser)


module.exports = router


