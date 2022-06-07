const mongoose = require('../db/connection')

const characterSchema = new mongoose.Schema({
    userName: String,
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


const Character = mongoose.model('Character', characterSchema)

module.exports = Character