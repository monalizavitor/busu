require('dotenv-safe').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())


//conexão com o mongo
let db = require('./configs/database')
db.connect()


//rotas
const routesUser = require('./routes/userRoutes')
const routesCooperador = require('./routes/cooperadorRoutes')
const routesTicket = require('./routes/ticketRoutes')

app.use(express.json())

// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// )


//configuração do cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
      )
      next()
    })


app.use('/user', routesUser)
app.use('/cooperadores', routesCooperador)
app.use('/ticket', routesTicket)


module.exports = app