//schema for characters
const mongoose = require('../db/connection')
//const Character = require()

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    characters: [{type: Schema.Types.ObjectId, ref: 'Character'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User