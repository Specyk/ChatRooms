export default (state = [], action) => {
    switch (action.TYPE) {
        case "MESSAGE_SENT":
            return [...state, action.payload]
        case "LOAD_MESSAGES":
            return [...action.payload]
        default:
            return state
    }
}