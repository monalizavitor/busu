const controllerTicket = require('../controller/ticketController')
const authentication = require('../auth/auth')

const express = require('express')
const router = express.Router()

// rota para gerar ticket de embarque
router.post('/create', authentication.auth, controllerTicket.createTicket)

router.get('/', authentication.auth, controllerTicket.getAll)

// rota para alterar ticket
router.put('/update/:id', authentication.auth, controllerTicket.updateTicket)

// rota para remover ticket
router.delete('/remove/:id', authentication.auth, controllerTicket.deleteTicket)


module.exports = router