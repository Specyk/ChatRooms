const { Schema, model } = require('mongoose')

const MessageSchema = new Schema({
    author: String,
    content: String,
    postDate: Date
})

module.exports = model('messages', MessageSchema)