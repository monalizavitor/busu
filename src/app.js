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
const routesViagem = require('./routes/viagemRoutes')
const routesTicket = require('./routes/ticketRoutes')
const routesindex = require('./routes/index')

app.use(express.json())


//configuração do cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

//rotas
app.use('/', routesUser)
app.use('/', routesViagem)
app.use('/', routesTicket)
app.use('/', routesindex)



module.exports = app