import React from 'react'
import CreateRoomEntry from 'components/RoomList/CreateRoomEntry'
import { useSelector, useDispatch } from 'react-redux'
import { createRoom } from 'actions/roomsActions'

export default function CreateRoomEntryContainer() {
    const rooms = useSelector(state => state.rooms)
    const isRoomCreating = useSelector(state => state.isRoomCreating)
    const dispatch = useDispatch()

    const onCreateRoomSubmit = (roomName) => {
        dispatch(createRoom(roomName))
    }

    return (
        <CreateRoomEntry roomsArr={rooms} isRoomCreating={isRoomCreating} onCreateRoomSubmit={onCreateRoomSubmit} />
    )
}
