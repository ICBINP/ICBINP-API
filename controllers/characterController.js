const express = require('express')
const router = express.Router()

const Character = require('../models/character')
const User = require('../models/user')

router.get('/', (req, res) => {
    Character.find({}).then(character => {
        res.json(character)
    }).catch((err) => {
        console.log(err)
    })
})

router.post('/', (req, res) => {
    Character.create({
        "characterName": req.body.characterName,
        "class": req.body.class,
        "stats": {
            "hp": req.body.stats.hp,
            "mana": req.body.stats.mana,
        },
        "alignment": req.body.alignment,
        "weapon": req.body.weapon,
        "level": req.body.level
    })//.then(newCharacter => res.json(newCharacter))
    .then(newCharacter => {
        let character = newCharacter
        //User.findOneAndUpdate({userName: req.body.userName}, {$push {characters: newCharacter }]})
        User.find({userName: req.body.userName})
        .then(user => {
            let currentUser = user
            console.log(character)
            user[0].characters.push(character)
            console.log(user)
        }).then(() => {
            user.save()
            res.json({data: user})
        })
    })
})

router.put('/', (req, res) => {
    Character.findByIdAndUpdate(req.body.id).then((newCharacter) => {
        res.json({data: newCharacter})
    })
})

router.patch('/', (req, res) => {
    console.log(req.body)
    Character.findByIdAndUpdate(req.body.id, {
        characterName: req.body.characterName
    }, {new: true}).then((newCharacter) => {
        res.json({data: newCharacter})
    })
})

router.delete("/:id", (req, res) => {
    Character.findByIdAndDelete(req.body.id)
    .then((deadCharacter) => {
        res.json({data: deadCharacter})
    })
})



/* router.delete("/:id", (req, res) => {
    Character.findByIdAndDelete(req.params.id)
    .then((deadCharacter) => {
        res.json({data: deadCharacter})
    })
}) */

module.exports = router