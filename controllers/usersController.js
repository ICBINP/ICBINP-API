const express = require('express')
const router = express.Router()

const User = require('../models/user')



router.get('/', (req, res) => {
    User.find({}).then(user => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})

router.post('/', (req, res) => {
    User.create({
        "userName": req.body.userName,
        "characters": [] 
    }).then(newUser => res.json(newUser))
})



module.exports = router