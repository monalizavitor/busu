const mongoose = require('mongoose')
const Schema = mongoose.Schema

// estruturando o model
const userSchema = new Schema({

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
    email: {
        type: String,
        auto: false,
        required: true
    },
    senha: {
        type: String,
        auto: false,
        required: true
    }

}, {
    // gera por padrão uma versão para cada atualização do documento
    versionKey: false
})


// atribuindo o esquema a uma collection
const userCollection = mongoose.model('user', userSchema)

module.exports = userCollection