import React from 'react'
import RoomEntry from 'containers/RoomList/RoomEntryContainer'
import NewRoomEntryContainer from 'containers/RoomList/NewRoomEntryContainer'

const makeRoomEntry = (roomData) => (
    <RoomEntry
        id={roomData._id}
        name={roomData.name}
        members={roomData.members}
        lastActivityTime={roomData.lastActivityTime}
    />)

export default function RoomEntries({ roomsArr, isRoomCreating }) {

    return (
        <ul>
            {isRoomCreating ? <li key="newRoom"><NewRoomEntryContainer /></li> : null}
            {roomsArr.map((r) => <li key={r._id} className="list-group-item d-flex justify-content-between align-items-center {r.isCurrent ? 'active': ''}">{makeRoomEntry(r)}</li>)}
        </ul>
    )
}
