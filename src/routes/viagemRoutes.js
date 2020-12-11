const controllerViagem = require('../controller/viagemController')

const express = require('express')
const router = express.Router()

// rota para obter todas as viagens
router.get('/all', controllerViagem.getAll)

// para obter uma viagem pelo id
router.get('/:id', controllerViagem.findById)


module.exports = router