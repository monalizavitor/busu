const ticketSchema = require('../model/ticketSchema')
const findCooperador = require('../model/cooperadorSchema')


const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const getTicket = (req, res) => {

    console.log(`Método: ${req.method}, endpoint: ${req.url}`)

    const authHeader = req.get('authorization')

    if (!authHeader)
        return res.status(401).send({ message: 'Headers não foi encontrado!' })


    const token = authHeader.split(' ')[1]

    jwt.verify(token, SECRET, (error) => {
        if (error)
            return res.status(403).send({ message: 'Token inválido!' })


        findCooperador.find({ destino: req.body.destino }, (error, coop) => {
            if (error)
                return res.sendStatus(500)

            const newTicket = new ticketSchema(req.body)

            newTicket.save((error) => {
                if (error)
                    return res.status(500).send(error)

                return res.status(201).
                    send(`Ticket gerado com sucesso. Apresente seu ticket no embarque 
            ${newTicket}. 
            ${coop}.
            Boa viagem ${newTicket.nome}!`)
            })

        })
    })




}

module.exports = {
    getTicket
}