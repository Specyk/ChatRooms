const Message = require('../models/Message')

module.exports = {
    sendMessage: async ({ author, room, message }) => {
        const msg = new Message({
            author: author._id,
            chatRoom: room._id,
            content: message,
            postDate: Date.now()
        })
        await msg.save()
    },
    deleteMessageById: async (id) => {
        await Message.findOneAndDelete({ _id: id })
        return id
    }
}