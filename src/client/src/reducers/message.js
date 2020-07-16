export default (state = null, action) => {
    switch (action.TYPE) {
        case "SEND_MESSAGE":
            return [...state, action.payload]
        default:
            return state
    }
}