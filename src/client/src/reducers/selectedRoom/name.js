export default (state = "", { type, payload }) => {
    switch (type) {

        case "SELECT_ROOM":
            return String(payload.name)

        default:
            return state
    }
}
