export default (state = [], action) => {
    switch (action.type) {
        case "MESSAGE_SENT":
            return [...state, action.payload]
        case "SELECT_ROOM":
            return [...action.payload.messages]
        default:
            return state
    }
}