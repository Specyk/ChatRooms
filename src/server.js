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
    express.json(),
    routesLoader(path.join(__dirname, 'routes'))
)

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = { httpServer, io }