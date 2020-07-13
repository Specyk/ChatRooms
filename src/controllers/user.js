const userService = require('../services/user')

module.exports = {
    getUserHandler: async (req, res, next) => {
        try {
            const { userId } = req.body
            const user = await userService.getUser(userId)
            res.json(user)
        } catch (err) {
            console.log(`${req.url} error: ${err}`)
            next()
        }
    },
    createUserHandler: async (req, res, next) => {
        try {
            const user = await userService.createUser()
            res.json(user)
        } catch (err) {
            console.log(`${req.url} error: ${err}`)
            next()
        }

    },
    deleteUserHandler: async (req, res, next) => {
        try {
            const { userId } = req.params
            await userService.deleteUser(userId)
            res.json(userId)
        } catch (err) {
            console.log(`Delete user issue: ${err}`)
            next()
        }
    }
}