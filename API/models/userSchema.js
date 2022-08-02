const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    "names":{
        type: String,
        required: true,
    },
    "email":{
        type: String,
        required: true,
    },
    "country":{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("user", userSchema)