require('dotenv-safe').config()

const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI ||
    'mongodb://localhost:27017/busu'

const connect = () => {
    mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        .then(() => console.log('MongoDB connected!'))
        .catch((err) => console.log(err))

}

module.exports = { connect }
