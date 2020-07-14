const messageService = require('../../src/services/message')
const Message = require('../../src/models/Message')
const { connectDb, closeDb } = require('../helpers')
const userFactory = require('../factories/user')
const chatRoomFactory = require('../factories/chatRoom')

describe('messageService', () => {
    beforeAll(async () => {
        await connectDb()
    })

    afterAll(async () => {
        await closeDb()
    })

    test('should send message', async () => {
        const author = userFactory.createUser()
        const chatRoom = chatRoomFactory.createChatRoom()
        await Promise.all([author.save(), chatRoom.save()])
        const messageContent = "czesc byku"
        await messageService.sendMessage({ author, chatRoom, messageContent })
        const foundMessage = await Message.findOne({ content: "czesc byku" })
        expect(foundMessage).toHaveProperty('content', "czesc byku")
    })

    test('should delete message by id', async () => {
        const msg = new Message({ content: "hejka" })
        await msg.save()
        await messageService.deleteMessageById(msg._id)
        const foundMsg = await Message.findById(msg._id)
        expect(foundMsg).toBeNull()
    })
})
