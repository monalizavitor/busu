const ticketSchema = require('../model/ticketSchema')
const findBusu = require('../model/viagemSchema')


const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ticketCollection = require('../model/ticketSchema')
const SECRET = process.env.SECRET


const getTicket = (req, res) => {
    console.log(`Método: ${req.method} ${req.url}`)

    const authHeader = req.get('authorization')

    if (!authHeader)
        return res.status(401).send({ message: 'Headers não foi encontrado!' })


    const token = authHeader.split(' ')[1]

    jwt.verify(token, SECRET, (error) => {
        if (error)
            return res.status(403).send({ message: 'Token inválido!' })


        findBusu.find({ destino: req.body.destino }, (error, busu) => {
            if (error)
                return res.sendStatus(500)

            const newTicket = new ticketSchema(req.body)

            newTicket.save((error) => {
                if (error)
                    return res.status(500).send(error)

                return res.status(201).
                    send('Ticket gerado com suesso! ' + newTicket)
               



            })

        })
    })

}


const updateTicket = (req, res) => {
    console.log(`Método: ${req.method} ${req.url}`)

    const { id } = request.params.id //pegando o valor do ID na URL
    const { ticketBody } = request.body
    const update = { new: true }

    ticketSchema.findByIdAndUpdate(
        id,
        ticketBody,
        update,
        (error, ticket) => {
            if (error)
                return res.sendStatus(500)
            return res.status(200).send({ message: `${ticket} ${req.params.id} alterado.` })

        }
    )
}



module.exports = {
    getTicket,
    updateTicket
}