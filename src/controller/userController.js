const userCollection = require('../model/userSchema')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const getToken = (param = {}) => jwt.sign(param, SECRET)


const signUp = async (req, res) => {

    const hashPassword = await bcrypt.hashSync(req.body.senha, 12)
    req.body.senha = hashPassword

    const user = new userCollection(req.body)

    user.save((error) => {
        if (error)
            res.status(500).send(error)

        res.status(201).send(user)
    })
}


const signIn = (req, res) => {

    userCollection.findOne({ email: req.body.email }, (error, user) => {
        if (!user)
            return res.status(404).send(`O email ${req.body.email} não foi encontrado!`)

        const passwordValidate = bcrypt.compareSync(req.body.senha, user.senha)

        if (!passwordValidate)
            return res.status(403).send('Senha inválida!')


        return res.status(200).send({
            user,

            token: getToken({ email: req.body.email })
        })
    })

}


const deleteUser = (req, res) => {

    const id = req.params.id

    userCollection.findByIdAndDelete(id, (error, user) => {
        if (error)
            return res.status(500).send('Houve um erro!')
        if (!id)
            return res.status(404).send('Id não encontrado!')
        return res.status(200).send(`Usuário ${user.nome} deletado com sucesso!`)
    })
}



module.exports = {
    signUp,
    signIn,
    deleteUser
}