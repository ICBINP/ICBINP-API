const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', (req, res) => {
    console.log(req.body)
    User.find({}).populate({path: "characters"}).then(user => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})


router.get('/:userName', (req, res) => {
    console.log(req.body)
    User.find({userName: req.params.userName}).populate({path: "characters"}).then(user => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})

router.post('/', (req, res) => {
    console.log(req.body.userName)
    User.create({
        "userName": req.body.userName,
        "characters": [] 
    }).then(newUser => res.json(newUser))
})

router.put('/', (req, res) => {
    User.findByIdAndUpdate(req.body.id).then((newUser) => {
        res.json({data: newUser})
    })
})

router.patch('/', (req, res) => {
    User.findByIdAndUpdate(req.body.id, {
        userName: req.body.userName
    }).then((newUser) => {
        res.json({data: newUser})
    })
})

router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then((deaduser) => {
        res.json({data: deaduser})
    })
})



module.exports = router





/* router.put('/', (req, res) => {
    User.findByIdAndUpdate(req.body.id).then((newUser) => {
        res.json({data: newUser})
    })
})

router.delete("/", (req, res) => {
    User.findByIdAndDelete(req.body.id)
    .then((deaduser) => {
        res.json({data: deaduser})
    })
}) */