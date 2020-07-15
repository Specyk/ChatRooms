import { combineReducers } from 'redux'

import messagesReducer from './messages'
import roomsReducer from './rooms'

const reducers = {
    messagesReducer,
    roomsReducer
}

export default combineReducers(reducers)
