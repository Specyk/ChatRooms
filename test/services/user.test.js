const userService = require('../../src/services/user')
const User = require('../../src/models/User')
const { connectDb } = require('../helpers')

describe('userService', () => {
    beforeAll(async () => {
        await connectDb()
    })

    test('should create user ', async () => {
        await userService.createUser('marian')
        const foundUser = await User.findOne({ name: 'marian' })
        await User.findOneAndDelete({ name: foundUser.name })
        expect(foundUser).toHaveProperty('name', 'marian')
    })
});


