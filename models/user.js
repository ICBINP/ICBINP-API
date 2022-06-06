//schema for characters
const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    userName: String,
    characters: []
})


const characterSchema = new mongoose.Schema({
    characterName: String,
    class: String,
    stats: {
        hp: Number,
        mana: Number
    },
    alignment: String,
    weapon: String,
    level: Number
})

const User = mongoose.model('Character', userSchema)

module.exports = User