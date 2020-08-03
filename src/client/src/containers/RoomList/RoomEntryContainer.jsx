import React, { Fragment } from 'react'
import RoomEntry from '../../components/RoomList/RoomEntry'
import { useSelector } from 'react-redux'

export default function RoomEntryContainer({ id, name, members, lastActivityTime }) {
    const user = useSelector(state => state.user)
    const routePath = `/chat/${id}`
    return (
        <RoomEntry user={user} id={id} name={name} members={members} lastActivityTime={lastActivityTime} />
    )
}
