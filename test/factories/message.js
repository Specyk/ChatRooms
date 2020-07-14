const faker = require('faker')
const Message = require('../../src/models/Message')
const { getRandomElements } = require('../helpers')

module.exports = {
    createMessage: (users, chatRooms) => new Message({
        author: getRandomElements(users, 1)[0],
        content: faker.lorem.sentence(),
        chatRoom: getRandomElements(chatRooms, 1)[0],
        postDate: faker.date.past()
    })
}