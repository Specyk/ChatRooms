const Message = require('../models/Message')

module.exports = {
    sendMessage: async ({ authorId, chatRoomId, messageContent }) => {
        const msg = new Message({
            author: authorId,
            chatRoom: chatRoomId,
            content: messageContent,
            postDate: Date.now()
        })
        await msg.save()
    },
    deleteMessageById: async (id) => {
        await Message.findOneAndDelete({ _id: id })
        return id
    }
}