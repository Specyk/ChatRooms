import chatRoomsApi from '../api/chatRooms'

export const selectRoom = (chatId) => async (dispatch, getState) => {
    const chatRoom = await chatRoomsApi.get(`/chatRooms/${chatId}`)
    console.log(`!@# room: ${chatRoom.data}`)
    return dispatch({
        type: "SELECT_ROOM",
        payload: chatRoom.data
    })
}