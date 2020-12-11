const ticketCollection = require('../model/ticketSchema')


const createTicket = (req, res) => {

    const ticketBody = req.body
    const newTicket = new ticketCollection(ticketBody)

    newTicket.save((error) => {

        if (error)
            res.status(500).send(error)

        return res.status(201).send(newTicket)
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

            return res.status(200).send(`${ticket} ${req.params.id} alterado.`)

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
        return res.status(200).send(`${ticket.nome}, seu ticket foi cancelado com sucesso !`)
    })
}



module.exports = {
    createTicket,
    updateTicket,
    deleteTicket
}