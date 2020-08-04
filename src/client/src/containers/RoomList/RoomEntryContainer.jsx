import React, { Fragment } from 'react'
import RoomEntry from 'components/RoomList/RoomEntry'
import { useSelector } from 'react-redux'

export default function RoomEntryContainer({ id, name, lastActivityTime }) {
    const state = useSelector(state => state)
    const { user, roomsList } = state
    const members = roomsList.rooms.find(r => r._id == id)
    return (
        <RoomEntry user={user} id={id} name={name} members={members} lastActivityTime={lastActivityTime} />
    )
}
