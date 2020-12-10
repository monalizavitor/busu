const ticketCollection = require('../model/ticketSchema')

const jwt = require('jsonwebtoken')
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

        const newTicket = new ticketCollection(req.body)
        
        newTicket.save((error) => {

            if (error)
                return res.status(500).send(error)

            return res.status(201).
                send('Ticket gerado com sucesso! ' + newTicket)

        })

    })

}


const updateTicket = (req, res) => {
    console.log(`Método: ${req.method} ${req.url}`)

    
    const id = req.params.id //pegando o valor do ID na URL
    const ticketBody = request.body
    const update = { new: true }

    ticketCollection.findByIdAndUpdate(
        id,
        ticketBody,
        update,
        (error, 
            ticket) => {
            if (error)
                return res.sendStatus(500)

            return res.status(200).send({ message: `${ticket} ${req.params.id} alterado.` })

        }
    )
}

const deleteTicket = (req, res) => {
    console.log(`Método: ${req.method} ${req.url}`)

    const id = req.params.id

    ticketCollection.findByIdAndDelete(id, (error, ticket) => {
        if (error)
            return res.status(500).send('Houve um erro!')
        if (!ticket)
            return res.status(404).send('Id não encontrado!')
        return res.status(200).send(`Ticket cancelado com sucesso, ${ticket.nome}!`)
    })
}



module.exports = {
    getTicket,
    updateTicket,
    deleteTicket
}