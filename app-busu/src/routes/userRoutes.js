const UserController = require('../controller/userController')

const express = require('express')
const router = express.Router()


// rota para cadastro
router.post('/signup', UserController.signUp)

// rota para login
router.post('/signin', UserController.signIn)


router.get('/all', UserController.getAll)

// rota para deletar user
router.delete('/delete/:id', UserController.deleteUser)


module.exports = router


