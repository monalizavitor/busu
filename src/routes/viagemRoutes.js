const controllerViagem = require('../controller/viagemController')

const express = require('express')
const router = express.Router()

// rota para obter todas as viagens
router.get('/viagem/all', controllerViagem.getAll)

// para obter uma viagem pelo id
router.get('/viagem/:id', controllerViagem.findById)


module.exports = router