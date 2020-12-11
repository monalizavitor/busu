const viagemCollection = require('../model/viagemSchema')


const getAll = (req, res) => {

    viagemCollection.find((error, viagem) => {
        if (error)
            return res.status(500).send('Houve um erro!')

        return res.status(200).send(viagem)

    })
}

const findById = (req, res) => {

    const id = req.params.id
    viagemCollection.findById(id, (error, busu) => {
        if (error)
            return res.status(500).send(error)
        if (!busu)
            return res.status(404).send('Id não encontrado!')

        return res.status(200).send(busu)
    })

}


// função para teste

// const createViagem = (req, res) => {

//     const viagem = new viagemCollection(req.body)

//     viagem.save((error) => {
//         if (error)
//             return res.sendStatus(500)

//         return res.status(200).send('Busu criado com sucesso')
//     })

// }



module.exports = {
    getAll,
    findById
}