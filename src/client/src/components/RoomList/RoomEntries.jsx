import React from 'react'
import RoomEntry from 'containers/RoomList/RoomEntryContainer'
import CreateRoomEntryContainer from 'containers/RoomList/CreateRoomEntryContainer'

export default function RoomEntries({ roomsArr, isRoomCreating }) {
    const makeRoomEntry = (roomData) => (
        <RoomEntry
            id={roomData._id}
            name={roomData.name}
            members={roomData.members}
            lastActivityTime={roomData.lastActivityTime}
        />)

    return (
        <ul className="list-group">
            {isRoomCreating ? <CreateRoomEntryContainer /> : null}
            {roomsArr.map((r) => <li key={r._id} className="list-group-item d-flex justify-content-between align-items-center {r.isCurrent ? 'active': ''}">{makeRoomEntry(r)}</li>)}
        </ul>
    )
}
