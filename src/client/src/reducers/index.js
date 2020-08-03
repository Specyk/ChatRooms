import { combineReducers } from 'redux'

import roomsListReducer from './roomsList'
import selectedRoomReducer from './selectedRoom'
import userReducer from './user'

const reducers = {
    roomsList: roomsListReducer,
    user: userReducer,
    selectedRoom: selectedRoomReducer,
}

export default combineReducers(reducers)
