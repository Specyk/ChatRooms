import React from 'react'
import RoomEntry from 'containers/RoomList/RoomEntryContainer'
import NewRoomEntryContainer from 'containers/RoomList/NewRoomEntryContainer'

const createRoomEntry = (roomData) => (
    <RoomEntry
        id={roomData._id}
        name={roomData.name}
        members={roomData.members}
        lastActivityTime={roomData.lastActivityTime}
    />)

export default function RoomEntries({ roomsArr, isRoomCreating }) {
    const formatClassName = active => active ? `active` : ''
    return (
        <ul>
            {isRoomCreating ? <li key="newRoom"><NewRoomEntryContainer /></li> : null}
            {roomsArr.map(r => <li key={r._id} className={formatClassName(r.isActive)}>{createRoomEntry(r)}</li>)}
        </ul>
    )
}
