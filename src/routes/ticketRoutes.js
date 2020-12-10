const controllerTicket = require('../controller/ticketController')

const express = require('express')
const router = express.Router()

// rota para gerar ticket de embarque
router.post('/create', controllerTicket.getTicket)

// rota para alterar ticket
router.put('/update/:id', controllerTicket.updateTicket)

// rota para remover ticket
router.delete('/remove/:id', controllerTicket.deleteTicket)


module.exports = router