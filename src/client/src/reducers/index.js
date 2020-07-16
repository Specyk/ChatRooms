import { combineReducers } from 'redux'

import messagesReducer from './message'
import roomsReducer from './room'
import userReducer from './user'

const reducers = {
    messagesReducer,
    roomsReducer,
    userReducer
}

export default combineReducers(reducers)
