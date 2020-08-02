import { combineReducers } from 'redux';

import nameReducer from './name'
import messagesReducer from './messages'
import membersReducer from './members'

export default combineReducers({
    name: nameReducer,
    messages: messagesReducer,
    members: membersReducer
})