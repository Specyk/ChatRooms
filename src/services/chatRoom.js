const Room = require('../models/ChatRoom')

module.exports = {
    getRooms: async () => {
        const rooms = Room.find()
            .populate('members')
        return rooms
    },
    getRoomById: async (id) => {
        const room = await Room.findById(id).
            populate('members').
            populate({
                path: 'messages',
                populate: {
                    path: 'author',
                    // select: 'name',  ! doesn't work
                    model: 'users'
                }
            })
        const r = { // due to the select above doesn't work
            name: room.name,
            messages: room.messages.map(m => ({ author: m.author.name, content: m.content })),
            members: room.members
        }
        return r
    },
    createRoom: async (name) => {
        const newRoom = new Room({ name })
        await newRoom.save()
        return newRoom
    }
}