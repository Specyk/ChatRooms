import { combineReducers } from 'redux'

const reducers = {
    messagesReducer: (messages, action) => {
        if (action.type == "SEND_MESSAGE") {
            return [...messages, action.payload]
        }
        return messages
    },
    selectRoomReducer: (state, action) => {
        if (action.type == "SELECT_ROOM") {
            return { ...action.payload }
        }
        return state
    }

}
export default combineReducers(reducers)
