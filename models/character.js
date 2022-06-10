const mongoose = require('../db/connection')

const characterSchema = new mongoose.Schema({
    userName: String,
    characterName: {type: String, lowercase: true},
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