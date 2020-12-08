const cooperadorSchema = require('../model/cooperadorSchema')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const getAllCooperadores = (req, res) => {

    console.log(`Método: ${req.method}, endpoint: ${req.url}`)

    const authHeader = req.get('authorization')

    if (!authHeader) {
        return res.status(401).send({ message: 'Headers não foi encontrado!' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(token, SECRET, (error) => {
        if (error)
            return res.status(403).send({ message: 'Token inválido!' })

        cooperadorSchema.find((error, cooperador) => {
            if (error)
                return res.sendStatus(500)

            return res.status(200).send(cooperador)
        })
    })

}


module.exports = {
    getAllCooperadores
}