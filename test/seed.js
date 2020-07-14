const { connectDb } = require('./helpers')
const userFactory = require('./factories/user')
const chatRoomFactory = require('./factories/chatRoom')
const messageFactory = require('./factories/message')

async function main() {
    await connectDb()
    await seedDatabase()
}

const seedDatabase = async () => {
    const users = new Array(10).fill(null).map(() => userFactory.createUser())
    const chatRooms = new Array(10).fill(null).map(() => chatRoomFactory.createChatRoom(users))
    const messages = new Array(20).fill(null).map(() => messageFactory.createMessage(users, chatRooms))

    console.log(`chatRooms`)
    chatRooms.forEach(r => console.log(`room.name = ${r.name}`))
    console.log(`users`)
    users.forEach(r => console.log(`user.name = ${r.name}`))
    console.log(`Messages`)
    messages.forEach(r => console.log(`message.content = ${r.content}`))

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

module.exports = { main, seedDatabase }