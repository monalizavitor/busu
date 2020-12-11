const mongoose = require('mongoose')
const Schema = mongoose.Schema

const viagemSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    destino: {
        type: String,
        auto: false,
        required: true
    },
    placa_do_carro: {
        type: String,
        auto: false,
        required: true
    },
    cor_do_carro: {
        type: String,
        auto: false,
        required: true
    },
    
    horario: {
        type: String,
        auto: false,
        required: true
    },
    locais_para_embarque: {
        type: Array,
        auto: false,
        required: true
    },
    locais_para_desembarque: {
        type: Array,
        auto: false,
        required: true
    },
    tempo_estimado_da_viagem: {
        type: String,
        auto: false,
        required: false
    },
    nome_do_motorista: {
        type: String,
        auto: false,
        required: true
    },
    preco_da_passagem: {
        type: String,
        auto: false,
        required: true
    }

// }, {// gera por padrão uma versão para cada atualização do documento
//     versionKey: false

})

const viagemCollection = mongoose.model('viagensBusu', viagemSchema)

module.exports = viagemCollection
