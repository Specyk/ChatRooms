const { Schema, model, Types } = require('mongoose')

const MessageSchema = new Schema({
    author: {
        type: Types.ObjectId,
        ref: 'users'
    },
    chatRoom: {
        type: Types.ObjectId,
        ref: 'chatRooms'
    },
    content: String,
    postDate: Date
})

module.exports = model('messages', MessageSchema)