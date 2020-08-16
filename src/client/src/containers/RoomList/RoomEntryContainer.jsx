import React from 'react'
import RoomEntry from 'components/RoomList/RoomEntry'
import { useSelector } from 'react-redux'

export default function RoomEntryContainer({ id: thisRoomEntryId, name, lastActivityTime }) {
    const state = useSelector(state => state)
    const {
        user,
        roomsList,
        selectedRoom: {
            id: selectedRoomId
        }
    } = state
    const members = roomsList.rooms.find(r => r._id === thisRoomEntryId)
    return (
        <RoomEntry user={user} id={thisRoomEntryId} name={name} members={members} lastActivityTime={lastActivityTime} selectedRoomId={selectedRoomId} />
    )
}
