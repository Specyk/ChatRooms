export default (state = [], action) => {
    switch (action.TYPE) {
        case "LOAD_ROOMS":
            return [...action.payload]
        default:
            return state
    }
}