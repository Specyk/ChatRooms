const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const loadSocketConfiguration = require('./socket')
const routesLoader = require('./utils/routesLoader')

const app = express()
const httpServer = http.createServer(app)
const io = socketio(httpServer)
loadSocketConfiguration(io)

app.use('/',
    express.json()
)

app.use('/', routesLoader(path.join(__dirname, 'routes')))

app.get('/', (req, res) => res.send('Hello World!'))

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = { httpServer, io }