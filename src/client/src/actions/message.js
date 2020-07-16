export default {
    sendMessage: (room, message) => {
        return {
            type: "SEND_MESSAGE",
            payload: {
                message
            }
        }
    }
}