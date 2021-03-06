const chatRoomService = require('../services/chatRoom')

module.exports = {
    getRoomsHandler: async (req, res, next) => {
        try {
            const rooms = await chatRoomService.getRooms()
            res.json(rooms)
        } catch (err) {
            console.log(`${req.url} error: ${err}`)
            next()
        }
    },
    getRoomHandler: async (req, res, next) => {
        try {
            const { roomId } = req.params
            const room = await chatRoomService.getRoomById(roomId)
            res.json(room)
        } catch (err) {
            console.log(`${req.url} error: ${err}`)
            next()
        }

    },
    createRoomHandler: async (req, res, next) => {
        try {
            const { name } = req.body
            const room = chatRoomService.createRoom(name)
            res.json(room)
        } catch (err) {
            console.log(`${req.url} error: ${err}`)
            next()
        }
    }
}