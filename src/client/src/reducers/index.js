import { combineReducers } from 'redux'

import messagesReducer from './messages'
import roomsReducer from './rooms'
import selectedRoomReducer from './selectedRoom'
import userReducer from './user'

const reducers = {
    messages: messagesReducer,
    rooms: roomsReducer,
    user: userReducer,
    selectedRoom: selectedRoomReducer
}

export default combineReducers(reducers)
