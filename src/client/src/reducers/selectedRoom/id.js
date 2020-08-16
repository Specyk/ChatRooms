export default (state = "", { type, payload }) => {
    switch (type) {
        case "SELECT_ROOM":
            return String(payload.selectedRoomId)

        default:
            return state
    }
}
