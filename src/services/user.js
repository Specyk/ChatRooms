const User = require('../models/User')

module.exports = {
    getUser: async (id) => {
        const user = User.findById(id)
        return user
    },
    createUser: async (name) => {
        const newUser = new User({ name })
        await newUser.save()
        return newUser
    },
    deleteUser: async (id) => {
        const user = await User.findOneAndDelete({ _id: id })
        return user
    }
}