const express = require('express')
const router = express.Router()

// GET home page
router.get('/', (req, res) => 
    res.status(200).send({ 
        titulo: 'Bem vindas (os) ao Busu!', 
        version: '0.0001'
    })
)

module.exports = router