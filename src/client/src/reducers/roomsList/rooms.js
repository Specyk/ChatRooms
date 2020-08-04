import { FETCH_ROOMS, CREATE_ROOM } from 'actions/roomsActions'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ROOMS:
            return [...action.payload]
        case CREATE_ROOM:
            return [...state, action.payload]
        default:
            return state
    }
}