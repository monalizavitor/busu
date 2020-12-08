const controllerCooperador = require('../controller/cooperadorController')
const express = require('express')
const router = express.Router()




router.get('/', controllerCooperador.getAllCooperadores)



module.exports = router