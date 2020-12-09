const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URL
//mongodb://localhost:27017/busu

const connect = () => {
    mongoose.connect(mongoURI,
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
