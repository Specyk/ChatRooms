const userFactory = require('./factories/user')
const chatRoomFactory = require('./factories/chatRoom')
const messageFactory = require('./factories/message')

module.exports = async () => {
    const users = new Array(10).fill(null).map(() => userFactory.createUser())
    const chatRooms = new Array(10).fill(null).map(() => chatRoomFactory.createChatRoom(users))
    const messages = new Array(20).fill(null).map(() => messageFactory.createMessage(users, chatRooms))

    try {
        await Promise.all(
            [
                ...users.map(u => u.save()),
                ...chatRooms.map(c => c.save()),
                ...messages.map(m => m.save())
            ]
        )
    } catch (err) {
        console.log(`Saving data error: ${err}`)
    }
}
