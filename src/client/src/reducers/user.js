export default (state = null, { type, payload }) => {
    switch (type) {
        case "SIGN_IN":
            return String(payload)
        case "SIGN_OUT":
            return null
        default:
            return state
    }
}
