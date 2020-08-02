import chatRoomsApi from '../api/chatRooms'

export const selectRoom = (chatId) => async (dispatch, state) => {
    const chatRoom = await chatRoomsApi.get(`/chatRooms/${chatId}`)
    return dispatch({
        type: "SELECT_ROOM",
        payload: chatRoom.data
    })
}

export const sendMessage = (roomId, message) => async dispatch => {
    // socket io emit event sendMessage width data = {roomId, message}
    dispatch({
        type: "SEND_MESSAGE",
        payload: {
            message
        }
    })
}
