import React from 'react'
import RoomEntry from 'containers/RoomList/RoomEntryContainer'
import NewRoomEntryContainer from 'containers/RoomList/NewRoomEntryContainer'

export default function RoomEntries({ roomsArr, isRoomCreating, selectedRoomId }) {

    return (
        <ul>
            {isRoomCreating ? <NewRoomEntryContainer /> : null}
            {roomsArr.map(r => createRoomEntry(r))}
        </ul>
    )
}

const createRoomEntry = (roomData) => (
    <RoomEntry
        id={roomData._id}
        name={roomData.name}
        members={roomData.members}
        lastActivityTime={roomData.lastActivityTime}
    />)
