const Message = require('../models/Message')
const Room = require('../models/Room')

module.exports = {
    sendMessage: async ({ authorId, chatRoomId, messageContent }) => {
        const msg = new Message({
            author: authorId,
            chatRoom: chatRoomId,
            content: messageContent,
            postDate: Date.now()
        })
        await Promise.all([
            Room.findOneAndUpdate(
                { _id: chatRoomId },
                { $push: { messages: msg._id } }
            ),
            msg.save()
        ])
        return {
            content: msg.content,
            postDate: msg.postDate
        }
    },
    deleteMessageById: async (id) => {
        await Message.findOneAndDelete(
            { _id: id }
        )
        return id
    }
}