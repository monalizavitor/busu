const controllerViagem = require('../controller/viagemController')
const express = require('express')
const router = express.Router()




router.get('/all', controllerViagem.getAll)

// router.get('/:id', controllerViagem.findBusu)

router.get('/:name', controllerViagem.findBusuByRoute)

module.exports = router