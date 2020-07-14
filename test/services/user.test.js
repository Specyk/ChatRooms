const userService = require('../../src/services/user')
const User = require('../../src/models/User')
const { connectDb, closeDb } = require('../helpers')

describe('userService', () => {
    beforeAll(async () => {
        await connectDb()
    })

    afterAll(async () => {
        await closeDb()
    })

    test('should get user', async () => {
        const user = new User({ name: 'wladyslaw' })
        await user.save()
        const obtainedUser = await userService.getUser(user._id)
        await User.findOneAndDelete({ name: 'wladyslaw' })
        expect(obtainedUser).toHaveProperty('name', 'wladyslaw')
    })

    test('should create user ', async () => {
        await userService.createUser('marian')
        const foundUser = await User.findOne({ name: 'marian' })
        await User.findOneAndDelete({ name: foundUser.name })
        expect(foundUser).toHaveProperty('name', 'marian')
    })

    test('should delete user', async () => {
        const user = new User({ name: 'adrian' })
        await user.save()
        await userService.deleteUser(user._id)
        const foundDeletedUser = await User.findById(user._id)
        expect(foundDeletedUser).toBeNull()
    })
})


