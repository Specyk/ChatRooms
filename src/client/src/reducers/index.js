import { combineReducers } from 'redux'

import roomsReducer from './rooms'
import selectedRoomReducer from './selectedRoom'
import userReducer from './user'

const reducers = {
    rooms: roomsReducer,
    user: userReducer,
    selectedRoom: selectedRoomReducer,
}

export default combineReducers(reducers)
