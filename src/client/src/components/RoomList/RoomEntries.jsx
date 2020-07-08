import React from 'react'
import RoomEntry from './RoomEntry'

export default function RoomEntries({ roomsArr, chooseRoomHandler }) {
    const createRoomEntry = (roomData) => (
        <RoomEntry
            name={roomData.name}
            members={roomData.members}
            lastActivityTime={roomData.lastActivityTime}
            onClickHandler={chooseRoomHandler}
        />)

    return (
        <ul className="list-group">
            {roomsArr.map((r) => <li className="list-group-item d-flex justify-content-between align-items-center {r.isCurrent ? 'active': ''}">{createRoomEntry(r)}</li>)}
        </ul>
    )
}
