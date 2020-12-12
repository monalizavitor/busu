const ticketCollection = require('../model/ticketSchema')


const createTicket = async (req, res) => {
    const ticketBody = req.body
    const newTicket = new ticketCollection(ticketBody)

    await newTicket.save()
    const newTicketWithViagem = await ticketCollection
        .findById(newTicket._id)
        .populate("viagemId")

    const response = {
        id: newTicket._id,
        nome: newTicket.nome,
        data_da_viagem: newTicket.data_da_viagem,
        destino: newTicketWithViagem.viagemId.destino,
        horario: newTicketWithViagem.viagemId.horario,
        placa_do_carro: newTicketWithViagem.viagemId.placa_do_carro,
        locais_para_embarque: newTicketWithViagem.viagemId.locais_para_embarque,
        locais_para_desembarque:
            newTicketWithViagem.viagemId.locais_para_desembarque,
    }

    return res.status(201).send({ message: 'Ticket gerado com sucesso! ', response })
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