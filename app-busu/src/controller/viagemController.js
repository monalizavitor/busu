const viagemSchema = require('../model/viagemSchema')

const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const getAll = (req, res) => {
    console.log(`Método: ${req.method}, endpoint: ${req.url}`)

    const authHeader = req.get('authorization')

    if (!authHeader) {
        return res.status(401).send({ message: 'Headers não foi encontrado!' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(token, SECRET, (error) => {
        if (error)
            return res.status(403).send({ message: 'Token inválido!' })

        viagemSchema.find((error, viagem) => {
            if (error)
                return res.sendStatus(500)

            return res.status(200).send(viagem)
        })
    })

}

const findBusu = (req, res) => {
    console.log(`Método: ${req.method}, endpoint: ${req.url}`)

    const destino = req.query

    viagemSchema.find(destino, (error, busu) => {
        if (error)
            return res.status(500).send(error)

        return res.status(200).send(busu)
    })

}



module.exports = {
    getAll,
    findBusu
}