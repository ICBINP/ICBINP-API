//schema for characters
const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    userName: String,
    characters: [{type: Object, ref: 'characters'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User