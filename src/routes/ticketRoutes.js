const controllerTicket = require('../controller/ticketController')
const authentication = require('../auth/auth')

const express = require('express')
const router = express.Router()

// rota para gerar ticket de embarque
router.post('/ticket/create', authentication.auth, controllerTicket.createTicket)


// rota para alterar ticket
router.put('/ticket/update/:id', authentication.auth, controllerTicket.updateTicket)


// rota para remover ticket
router.delete('/ticket/remove/:id', authentication.auth, controllerTicket.deleteTicket)


module.exports = router