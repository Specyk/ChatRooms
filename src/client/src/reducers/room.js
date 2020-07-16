export default (state = null, action) => {
    switch (action.TYPE) {
        case "SELECT_ROOM":
            return { ...action.payload }
        case "GET_ALL_ROOMS":
            return { ...action.payload }
        default:
            return state
    }
}