export const sendMessage = (room, message) => {
    return {
        type: "SEND_MESSAGE",
        payload: {
            message
        }
    }
}
