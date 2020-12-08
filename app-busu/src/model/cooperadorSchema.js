const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cooperadorSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        Ref: 'user',
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
    horarios: {
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
        required: true
    },
    nome_do_motorista: {
        type: String,
        auto: false,
        required: true
    },
    valor: {
        type: Number,
        auto: false,
        required: true
    }

}, {// gera por padrão uma versão para cada atualização do documento
    versionKey: false

})

const cooperadorCollection = mongoose.model('cooperadores', cooperadorSchema)

module.exports = cooperadorCollection
