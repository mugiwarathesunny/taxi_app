require('dotenv').config()
const mongoose = require('mongoose')

module.exports = {
    connect: () => {
        mongoose.connect(
            process.env.DB_URI_ONLINE, {
                useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        )
        const connection = mongoose.connection
        connection.once('open', () => {
            console.log('success!')
        })
        connection.on('error', () => console.log ('failed'))
    }
}
