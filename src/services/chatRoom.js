const Room = require('../models/ChatRoom')

module.exports = {
    getRooms: async () => {
        const rooms = Room.find()
            .populate('members')
        return rooms
    },
    getRoom: async (id) => {
        const room = Room.findById({ id })
            .populate('messages')
            .populate('members')
        return room
    },
    createRoom: async (name) => {
        const newRoom = new Room({ name })
        await newRoom.save()
        return newRoom
    }
}