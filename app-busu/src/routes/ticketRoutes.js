const controllerTicket = require('../controller/ticketController')
const express = require('express')
const router = express.Router()


router.post('/create', controllerTicket.getTicket)
router.put('/update/:id', controllerTicket.updateTicket)
router.delete('/cancel/:id', controllerTicket.deleteTicket)


module.exports = router