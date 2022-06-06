const express = require('express')
const router = express.Router()

const Character = require('../models/character')

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
            "hp": req.body.hp,
            "mana": req.body.mana
        },
        "alignment": req.body.alignment,
        "weapon": req.body.weapon,
        "level": req.body.level
    }).then(newCharacter => res.json(newCharacter))
})

router.delete("/:id", (req, res) => {
    Character.findByIdAndDelete(req.params.id)
    .then((deadCharacter) => {
        res.json({data: deadCharacter})
    })
})

module.exports = router