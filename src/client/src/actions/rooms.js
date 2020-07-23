export const loadRooms = (rooms) => {
    return {
        type: "LOAD_ROOMS",
        payload: rooms
    }
}

export const addRoom = (room) => {
    return {
        type: "ADD_ROOM",
        payload: room
    }
}

export const removeRoom = (room) => {
    return {
        type: "REMOVE_ROOM",
        payload: room
    }
}



