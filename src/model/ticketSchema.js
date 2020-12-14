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
    data_da_viagem: {
        type: Date,
        auto: false,
        required: true
    },
    viagemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'viagens',
        required: true

    }

}, {
    versionKey: false
    // gera por padrão uma versão para cada atualização do documento
    
}, {timestamps: true})



// atribuindo o esquema a uma collection
const ticketCollection = mongoose.model('ticket', ticketSchema)

module.exports = ticketCollection