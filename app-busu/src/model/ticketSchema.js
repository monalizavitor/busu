const mongoose = require('mongoose')
const Schema = mongoose.Schema

// estruturando o model
const ticketSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        auto: false,
        required: true
    },
    data: {
        type: Date,
        auto: false,
        required: true
    },
    horario: {
        type: Number,
        auto: false,
        required: true

    }, 
    mensagem: {
        type: String,
        auto: false,
        required: true
    }

}, {
    // gera por padrão uma versão para cada atualização do documento
    versionKey: false
})


// atribuindo o esquema a uma collection
const ticketCollection = mongoose.model('ticket', ticketSchema)

module.exports = ticketCollection