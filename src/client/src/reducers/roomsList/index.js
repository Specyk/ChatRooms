import { combineReducers } from 'redux';

import isRoomCreatingReducer from './isRoomCreating'
import roomsReducer from './rooms'

export default combineReducers({
    isRoomCreating: isRoomCreatingReducer,
    rooms: roomsReducer,
})