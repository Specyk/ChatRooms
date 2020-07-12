export const selectRoom = (roomId) => {
    // TODO znajdz ten pokój
    const room = {}
    return {
        type: "SELECT_ROOM",
        payload: {
            room
        }
    }
}
export const joinUser = (username) => {
    return {
        type: "JOIN_USER",
        payload: {
            username
        }
    }
}
export const sendMessage = (room, message) => {
    return {
        type: "SEND_MESSAGE",
        payload: {
            room, message
        }
    }
}
