const viagemCollection = require('../model/viagemSchema')

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

        viagemCollection.find((error, viagem) => {
            if (error)
                return res.status(500).send('Houve um erro!')

            return res.status(200).send(viagem)

        })
    })


}

const findBusuByRoute = (req, res) => {
    console.log(`Método: ${req.method}, endpoint: ${req.url}`)

    const name = req.param.name
    viagemCollection.find(name, (error, busu) => {
        if (error)
            return res.status(500).send(error)
        if (!busu)
            return res.status(404).send('Destino não encontrado!')

        return res.status(200).send(busu)
    })

}

const createViagem = (req, res) => {

    const viagem = new viagemCollection(req.body)

    viagem.save((error) => {
        if (error)
            return res.sendStatus(500)

        return res.status(200).send('ok criado')
    })

}



module.exports = {
    getAll,
    findBusuByRoute,
    createViagem
}