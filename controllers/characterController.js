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
    console.log(req.body)
    Character.create({

        "characterName": req.body.newCharacter.characterName,
        "class": req.body.newCharacter.characterClass,
        // "stats": {
        //     "hp": req.body.stats.hp,
        //     "mana": req.body.stats.mana,
        // },
        "alignment": req.body.newCharacter.alignment,
        "weapon": req.body.newCharacter.weapon,
        // "level": req.body.newCharacter.level

    })//.then(newCharacter => res.json(newCharacter))
    .then(newCharacter => {
        console.log(newCharacter)
        User.findByIdAndUpdate(req.body.id, {$push: {characters: newCharacter._id }}, {new: true}).populate({path: 'characters'})
        .then(user => {
            console.log(user)
            res.json(user)
        })
    })
    })


router.put('/', (req, res) => {
    Character.findByIdAndUpdate(req.body.id).then((newCharacter) => {
        
    })
})

router.patch('/', (req, res) => {
    console.log(req.body)
    Character.findByIdAndUpdate(req.body.id, {
        characterName: req.body.characterName,
        class: req.body.class,
        "stats.hp": req.body.stats.hp,
        "stats.mana": req.body.stats.mana,
            /*hp: req.body.stats.hp,
            mana: req.body.stats.mana,*/
        
        alignment: req.body.alignment,
        weapon: req.body.weapon,
        level: req.body.level

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

router.delete("/", (req, res) => {
    Character.findByIdAndDelete(req.body.id)
    .then(data => {
        User.findOneAndUpdate({characters: data.id}, {$pull: {characters: data.id}})
    })
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