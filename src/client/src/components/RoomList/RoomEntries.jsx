import React from 'react'
import RoomEntry from '../../containers/RoomList/RoomEntryContainer'

export default function RoomEntries({ roomsArr, chooseRoomHandler }) {
    const createRoomEntry = (roomData) => (
        <RoomEntry
            id={roomData._id}
            name={roomData.name}
            members={roomData.members}
            lastActivityTime={roomData.lastActivityTime}
        />)

    return (
        <ul className="list-group">
            {roomsArr.map((r) => <li key={r._id} className="list-group-item d-flex justify-content-between align-items-center {r.isCurrent ? 'active': ''}">{createRoomEntry(r)}</li>)}
        </ul>
    )
}
