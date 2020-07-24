import chatRoomsApi from '../api/chatRooms'

export const loadRooms = (rooms) => async (dispatch, getState) => {
    const response = await chatRoomsApi.get('/chatRooms')
    dispatch({
        type: "LOAD_ROOMS",
        payload: response.data
    })
}

export const addRoom = (room) => async (dispatch) => {
    const response = await chatRoomsApi.post('/chatRooms', room)
    dispatch({
        type: "ADD_ROOM",
        payload: response
    })
}

export const removeRoom = (room) => async (dispatch) => {
    const response = await chatRoomsApi.delete(`/chatRooms/${room._id}`, room)
    return {
        type: "REMOVE_ROOM",
        payload: response
    }
}



