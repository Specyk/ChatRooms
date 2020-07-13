const { Router } = require('express')
const userController = require('../controllers/user')

const router = Router()

router.get('/:userId', userController.getUserHandler)
router.post('/', userController.createUserHandler)
router.delete('/:userId', userController.deleteUserHandler)

module.exports = router