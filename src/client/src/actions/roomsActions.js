import chatRoomsApi from '../api/chatRooms'

export const REMOVE_ROOM = "REMOVE_ROOM"
export const FETCH_ROOMS = "FETCH_ROOMS"
export const CREATE_ROOM = "CREATE_ROOM"
export const CLICK_CREATE_ROOM = "CLICK_CREATE_ROOM"

export const fetchRooms = (rooms) => async (dispatch, getState) => {
    const response = await chatRoomsApi.get('/chatRooms')
    dispatch({
        type: FETCH_ROOMS,
        payload: response.data
    })
}

export const clickCreateRoom = () => {
    return {
        type: CLICK_CREATE_ROOM
    }
}

export const createRoom = (room) => async (dispatch) => {
    const response = await chatRoomsApi.post('/chatRooms', room)
    dispatch({
        type: CREATE_ROOM,
        payload: response
    })
}

export const removeRoom = (room) => async (dispatch) => {
    const response = await chatRoomsApi.delete(`/chatRooms/${room._id}`, room)
    return {
        type: REMOVE_ROOM,
        payload: response
    }
}



