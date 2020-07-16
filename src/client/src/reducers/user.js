export default {
    joinUser: (username) => {
        return {
            type: "JOIN_USER",
            payload: {
                username
            }
        }
    }
}