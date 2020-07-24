export default (state = [], action) => {
    switch (action.type) {
        case "LOAD_ROOMS":
            return [...action.payload]
        default:
            return state
    }
}