const controllerCooperador = require('../controller/cooperadorController')
const express = require('express')
const router = express.Router()




router.get('/', controllerCooperador.getAllCooperadores)

router.get('/:id', controllerCooperador.findBusu)

module.exports = router