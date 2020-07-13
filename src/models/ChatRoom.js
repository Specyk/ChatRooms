const mongoose = require('mongoose')
const { Schema, model } = mongoose

const ChatRoomSchema = new Schema({
    name: {
        type: String,
        required: [true, "Room name is required"],
        validate: {
            validator: v => /[\w\sżźćńółęąśŻŹĆĄŚĘŁÓŃ]+/.test(v),
            message: props => `${props.value} is not a valid room name`
        }
    },
    members: [{
        type: mongoose.Types.ObjectId,
        ref: "users"
    }],
    messages: [{
        type: mongoose.Types.ObjectId,
        ref: "messages"
    }]
})

module.exports = model('chatRooms', ChatRoomSchema)