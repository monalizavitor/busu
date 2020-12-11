const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const auth = (req, res, next) => {
    const authHeader = req.get('authorization')

    if (!authHeader)
        return res.status(401).send('Headers não encontrados!')

    

    const token = authHeader.split(' ')[1]
    console.log('Token:')
    console.log(token)    

    jwt.verify(token, SECRET, (error) => {
        if (error)
            return res.status(403).send('Token inválido!')

        return next()

    })

}

module.exports = { auth }