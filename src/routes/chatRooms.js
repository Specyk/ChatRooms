const { Router } = require('express')
const chatRoomController = require('../controllers/chatRoom')

const router = Router()

router.get('/', chatRoomController.getRoomsHandler)
router.post('/', chatRoomController.createRoomHandler)
router.get('/:roomId', chatRoomController.getRoomHandler)

module.exports = router