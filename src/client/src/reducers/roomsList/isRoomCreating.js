import { CLICK_CREATE_ROOM } from 'actions/roomsActions'

export default (state = false, { type, payload }) => {
    switch (type) {
        case CLICK_CREATE_ROOM:
            return !state
        default:
            return state
    }
}
