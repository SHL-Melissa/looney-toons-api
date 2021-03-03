const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const characterRouter = require('../characters/characterRouter')

const server = express()

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

server.use('/api/characters', characterRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Server is running'})
})

server.use((err, req, res, next) => {
    res.status(err.code).json(err)
})

module.exports = server