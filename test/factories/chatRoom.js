const faker = require('faker')
const ChatRoom = require('../../src/models/ChatRoom')
const { getRandomElements } = require('../helpers')

module.exports = {
    createChatRoom: (users) => new ChatRoom({
        name: faker.company.companyName(),
        members: users ? getRandomElements(users, 4).map(e => e._id) : [],
        messages: []
    })
}