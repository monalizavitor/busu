const controllerViagem = require('../controller/viagemController')
const express = require('express')
const router = express.Router()




router.get('/all', controllerViagem.getAll)

// router.get('/:id', controllerViagem.findBusu)

router.get('/:nome', controllerViagem.findBusu)

module.exports = router