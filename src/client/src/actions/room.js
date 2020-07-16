const rs = [
    {
        _id: 1,
        name: "pokoj",
        lastActivityTime: "Wczoraj",
        members: 5
    },
    {
        _id: 2,
        name: "pokoj",
        lastActivityTime: "Wczoraj",
        members: 5
    },
    {
        _id: 3,
        name: "pokoj",
        lastActivityTime: "Wczoraj",
        members: 5
    }
]

export default {
    selectRoom: (roomId) => {
        // TODO znajdz ten pokój
        const room = {}
        return {
            type: "SELECT_ROOM",
            payload: {
                room
            }
        }
    },
    getAll: () => {
        return {
            type: "GET_ALL_ROOMS",
            payload: {
                rooms: rs
            }
        }
    }
}



