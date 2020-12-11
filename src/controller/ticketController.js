const ticketCollection = require('../model/ticketSchema')


const getAll = (req, res) => {

    const ticket = ticketCollection.find().populate('viagemId')

    return res.status(200).send(ticket)

}


const createTicket = (req, res) => {

    const newTicket = new ticketCollection(req.body)

    newTicket.save((error) => {

        if (error)
            return res.status(500).send(error)

        return res.status(201).
            send('Ticket gerado com sucesso! ', newTicket)
    })

}


const updateTicket = (req, res) => {

    const id = req.params.id
    const ticketBody = req.body
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
    createTicket,
    updateTicket,
    deleteTicket,
    getAll
}