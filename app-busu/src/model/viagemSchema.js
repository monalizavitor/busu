const mongoose = require('mongoose')
const Schema = mongoose.Schema

const viagemSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        ref: 'ticket',
        required: true
    },
    placa: {
        type: String,
        auto: false,
        required: true
    },
    cor: {
        type: String,
        auto: false,
        required: true
    },
    destino: {
        type: String,
        auto: false,
        required: true
    },
    horario: {
        type: String,
        auto: false,
        required: true
    },
    embarque: {
        type: Array,
        auto: false,
        required: true
    },
    desembarque: {
        type: Array,
        auto: false,
        required: true
    },
    tempo_estimado: {
        type: String,
        auto: false,
        required: false
    },
    motorista: {
        type: String,
        auto: false,
        required: true
    },
    valor: {
        type: String,
        auto: false,
        required: true
    }

}, {// gera por padrão uma versão para cada atualização do documento
    versionKey: false

})

const viagemCollection = mongoose.model('viagensBusu', viagemSchema)

module.exports = viagemCollection
