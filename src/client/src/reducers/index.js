import { combineReducers } from 'redux'

import messagesReducer from './messages'
import roomsReducer from './rooms'
import selectedRoomReducer from './selectedRoom'
import userReducer from './user'
import membersReducer from './members'

const reducers = {
    rooms: roomsReducer,
    user: userReducer,
    selectedRoom: selectedRoomReducer,
    members: membersReducer,
    messages: messagesReducer
}

export default combineReducers(reducers)
