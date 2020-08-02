export default (state = [], action) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            return [...state, action.payload]
        case "SELECT_ROOM":
            return [...action.payload.messages]
        default:
            return state
    }
}