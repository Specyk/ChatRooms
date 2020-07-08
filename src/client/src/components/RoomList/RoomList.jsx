import React, { useState } from 'react'
import RoomEntries from './RoomEntries'

export default function RoomList() {
    const [roomsArr, setRoomsArr] = useState(
        [
            {
                name: "pokoj",
                lastActivityTime: "Wczoraj",
                members: 5
            }
        ]
    )
    return (
        <div>
            <span>Room list</span>
            <RoomEntries roomsArr={roomsArr} />
        </div>
    )
}
