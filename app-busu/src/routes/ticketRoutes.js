const controllerTicket = require('../controller/ticketController')
const express = require('express')
const router = express.Router()




router.get('/', controllerTicket.getTicket)



module.exports = router