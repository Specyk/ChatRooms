const initialState = { name: '' }

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "SELECT_ROOM":
            return { name: payload.name }
        default:
            return state
    }
}
