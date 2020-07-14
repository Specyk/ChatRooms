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
    content: {
        type: String,
        required: [true, "Message must have a content"],
        validate: {
            validator: content => content.length > 0,
            message: () => `Message is empty!`
        }
    },
    postDate: Date
})

module.exports = model('messages', MessageSchema)