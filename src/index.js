const mongoose = require('mongoose')
const expressServer = require('./server').httpServer
const port = 3000

const keys = {
    mongoURI: 'mongodb://localhost/chatrooms'
}

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

async function main() {
    mongoose.connect(keys.mongoURI, mongooseOptions)
    mongoose.connection
        .once('open', () => {
            console.log('Connected to db')
        })
        .on('error', error => {
            console.log(`An error occured: ${error}`)
        })
    expressServer.listen(port, () => console.log(`ChatRooms server is listening on port ${port}`))
}

main().then(() => console.log('ChatRooms app is running'))
    .catch((err) => console.log(`ChatRooms app running error: ${err}`))


