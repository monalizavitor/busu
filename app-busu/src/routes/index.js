const express = require('express')
const router = express.Router()

// GET home page
router.get('/', (req, res) => {
    res.status(200).send({ titulo: 'Bem vinda(o) ao Busu!', version: '0.01'})
})

module.exports = router