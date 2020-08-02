const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "SELECT_ROOM":
            return [...payload.members]
        case "JOIN_MEMBER":
            return [...state, payload]
        case "LEAVE_MEMBER":
            return state.filter(m => m.name !== payload.name)
        default:
            return state
    }
}
