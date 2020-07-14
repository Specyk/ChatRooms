const faker = require('faker')
const User = require('../../src/models/User')

module.exports = {
    createUser: () => new User({
        name: faker.internet.userName()
    })
}