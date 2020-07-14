const chatRoomService = require('../../src/services/chatRoom')
const ChatRoom = require('../../src/models/chatRoom')
const Message = require('../../src/models/Message')
const User = require('../../src/models/User')
// don't remove Message and User

const { connectDb, closeDb } = require('../helpers')

describe('chatRoomService', () => {
    beforeAll(async () => {
        await connectDb()
    })

    afterAll(async () => {
        await closeDb()
    })

    test('should get room by id', async () => {
        const chatRoom = new ChatRoom({ name: 'pierwszy' })
        await chatRoom.save()
        const obtainedUser = await chatRoomService.getRoomById(chatRoom._id)
        await ChatRoom.findOneAndDelete({ name: 'wladyslaw' })
        expect(obtainedUser).toHaveProperty('name', 'pierwszy')
    })

    test('should get all rooms ', async () => {
        const obtainedRooms = await chatRoomService.getRooms()
        expect(obtainedRooms).not.toBeNull()
    })

    test('should create chatRoom', async () => {
        const room = await chatRoomService.createRoom('testowy pokoj')
        const foundRoom = await ChatRoom.findOne({ name: "testowy pokoj" })
        await ChatRoom.deleteOne({ name: 'testowy pokoj' })
        expect(foundRoom).not.toBeNull()
        expect(foundRoom).toHaveProperty('name', 'testowy pokoj')
    })
})


