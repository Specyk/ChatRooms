export default (state = null, action) => {
    switch (action.TYPE) {
        case "SELECT_ROOM":
            return { ...action.payload }
        default:
            return state
    }
}