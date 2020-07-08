import React from 'react'
import RoomEntry from './RoomEntry'

export default function RoomEntries({ roomsArr }) {
    const createRoomEntry = (roomData) => (
        <RoomEntry
            name={roomData.name}
            members={roomData.members}
            lastActivityTime={roomData.lastActivityTime}
        />)

    return (
        <ul>
            Pusta lista
            {roomsArr.map((r) => <li>{createRoomEntry(r)}</li>)}
        </ul>
    )
}
