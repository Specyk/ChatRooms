import React, { useEffect } from 'react'
import RoomEntries from './RoomEntries'
import { useSelector, useDispatch } from 'react-redux'
import { loadRooms } from '../../actions/rooms'

export default function RoomList() {
    const roomsArr = useSelector(state => state.rooms)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadRooms())
    })
    return (
        <nav className="bg-light sidebar">
            <h3>Room list</h3>
            <div className="sidebar-sticky">
                <RoomEntries roomsArr={roomsArr} />
            </div>
        </nav>
    )
}