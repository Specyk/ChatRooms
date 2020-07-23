const initialState = null

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "SELECT_ROOM":
            return payload
        default:
            return state
    }
}
