const userSchema = require('../model/userSchema')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const signUp = async (req, res) => {

    console.log(`Método: ${req.method}, endpoint: ${req.url}`)

    const hashPassword = await bcrypt.hashSync(req.body.senha, 12)
    req.body.senha = hashPassword

    const user = new userSchema(req.body)

    user.save((error) => {
        if (error) {
            res.status(500).send(error)
        }

        res.status(201).send({ message: `Sua conta foi criada com sucesso ${user}.` })
    })
}


const signIn = (req, res) => {

    console.log(`Método: ${req.method}, endpoint: ${req.url}`)

    userSchema.findOne({ email: req.body.email }, (error, user) => {
        if (!user)
            return res.status(404).send({ message: `O email ${req.body.email} não foi encontrado!` })

        const passwordValidate = bcrypt.compareSync(req.body.senha, user.senha)

        if (!passwordValidate)
            return res.status(403).send({ message: 'Senha inválida!' })

        const token = jwt.sign({ email: req.body.email }, SECRET)
 
        return res.status(200).send({ message: `Seja bem vida(o) ${user.nome}! Token: ${token}` })

    })
}

const getAll = (req, res) => {

    console.log(`Método: ${req.method}, endpoint: ${req.url}`)

    const authHeader = req.get('authorization')

    if (!authHeader) {
        return res.status(401).send({ message: 'Header não foi passado!' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(token, SECRET, (error) => {
        if (error)
            return res.status(403).send({ message: 'Token inválido!' })

        userSchema.find((error, user) => {
            if (error)
                return res.sendStatus(500)

            return res.status(200).send(user)
        })
    })

}



module.exports = {
    signUp,
    signIn,
    getAll
}