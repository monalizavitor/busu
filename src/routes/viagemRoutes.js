const controllerViagem = require('../controller/viagemController')

const express = require('express')
const router = express.Router()

// rota para obter todas as viagens
router.get('/all', controllerViagem.getAll)

// router.get('/:id', controllerViagem.findBusu)

router.get('/:name', controllerViagem.findBusuByRoute)

// rota para criar viagem
router.post('/create', controllerViagem.createViagem)

module.exports = router