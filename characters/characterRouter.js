const router = require('express').Router()
const db = require('../database/dbConfig')
const Characters = require('./characterModel')

// all has /api/characters in front

router.get('/', (req, res, next) => {
    Characters.findAll()
    .then(characters => res.status(200).json({data: characters}))
    .catch(err => next({ code: 500, message: 'Problems getting characters', err}))
})

router.get('/:id', (req, res) => {
    Characters.findById(req.params.id)
        .then(character => {
            if (character) {
                res.status(200).json({data: character})
            } else {
                res.status(404).json({message: 'ID not found'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Trouble getting Characters', err})
        })
})

router.post('/', (req, res) => {
    Characters.add(req.body)
        .then(character => {
            res.status(201).json({data: character})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Trouble adding Characters'})
        })
})

router.put('/:id', (req, res) => {
    Characters.update(req.params.id, req.body)
        .then(character => {
            if(character) {
                res.status(200).json({data: character})
            } else {
                res.status(404).json({message: 'Id not found'})
            }
        })
        .catch(err => {
            console.log(err)
                res.status(500).json({message: 'Trouble updating Character'})
        })
})

router.delete('/:id', (req, res) => {
    Characters.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({message: "Character has been removed"})
            } else {
                res.status(400).json({message: 'ID not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Unable to remove that Character"})
        })
})

module.exports = router