import { combineReducers } from 'redux'

import roomsListReducer from './roomsList'
import selectedRoomReducer from './selectedRoom'
import userReducer from './user'
import { reducer as reduxReducer } from 'redux-form'

const reducers = {
    roomsList: roomsListReducer,
    user: userReducer,
    selectedRoom: selectedRoomReducer,
    form: reduxReducer
}

export default combineReducers(reducers)
