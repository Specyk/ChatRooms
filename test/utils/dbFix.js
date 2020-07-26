const { connectDb, closeDb } = require('../helpers')
const Message = require('../../src/models/Message')
const ChatRoom = require('../../src/models/ChatRoom')

main().then(() => 'Db fix is succesfully running').catch(err => console.log(`An error occured: ${err}`))

async function main() {
    await connectDb('mongodb://localhost/chatrooms')
    const messages = await Message.find()
    const roomMessages = groupMessageIdsByChatRoomId(messages)
    await completeTheData(roomMessages)
    await closeDb()
}


const groupMessageIdsByChatRoomId = (messages) => { // returns an object = {key = chatRoomId, value = [messageId1, messageId2 ...]}
    const roomMessages = messages.reduce((roomMessages, cur, i, arr) => {
        if (!roomMessages[cur.chatRoom]) {
            roomMessages[cur.chatRoom] = [cur._id]
        } else {
            roomMessages[cur.chatRoom].push(cur._id)
        }
        return roomMessages
    }, {})
    return roomMessages
}

const completeTheData = async (collectionNests) => {
    const promises = Object.keys(collectionNests).map(collectionId => {
        return ChatRoom.findOneAndUpdate(
            { _id: collectionId },
            { $push: { messages: { $each: collectionNests[collectionId] } } }
        )
    })
    const updatedResult = await Promise.all(promises)
}