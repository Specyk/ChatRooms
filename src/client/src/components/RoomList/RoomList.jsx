import React, { useState } from 'react'
import RoomEntries from './RoomEntries'

export default function RoomList({ chooseRoomHandler }) {
    const [roomsArr, setRoomsArr] = useState(
        [
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
    )
    return (
        <nav className="bg-light sidebar">
            <h3>Room list</h3>
            <div className="sidebar-sticky">
                <RoomEntries roomsArr={roomsArr} chooseRoomHandler={chooseRoomHandler} />
            </div>
        </nav>
    )
}
