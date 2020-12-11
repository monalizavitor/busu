const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const auth = (req, res) => {
    const authHeader = req.get('authorization')

    if (!authHeader)
        return res.status(401).send('Headers não foi encontrado!')


    const token = authHeader.split(' ')[1]

    jwt.verify(token, SECRET, (error) => {
        if (error)
            return res.status(403).send('Token inválido!')

    })

}

module.exports = { auth }