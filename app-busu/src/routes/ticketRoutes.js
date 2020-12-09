const controllerTicket = require('../controller/ticketController')
const express = require('express')
const router = express.Router()




router.post('/create', controllerTicket.getTicket)
router.put('/update', controllerTicket.updateTicket)


module.exports = router