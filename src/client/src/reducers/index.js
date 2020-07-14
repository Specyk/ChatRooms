import { combineReducers } from 'redux'

const reducers = {
    messagesReducer: (state = null, action) => {
        if (action.type == "SEND_MESSAGE") {
            return [...state, action.payload]
        }
        return state
    },
    selectRoomReducer: (state = null, action) => {
        if (action.type == "SELECT_ROOM") {
            return { ...action.payload }
        }
        return state
    }

}
export default combineReducers(reducers)
