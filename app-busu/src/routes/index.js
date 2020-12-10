const express = require('express')
const router = express.Router()

// GET home page
router.get('/', (req, res) => 
    res.send({ home: 'Bem vindas (os) ao Busu! v0.01'})
)

module.exports = router