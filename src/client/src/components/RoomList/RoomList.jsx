import React, { useState } from 'react'
import RoomEntries from './RoomEntries'

import { useSelector, useDispatch } from 'react-redux'

export default function RoomList({ chooseRoomHandler }) {
    const roomsArr = useSelector(state => state.rooms)

    return (
        <nav className="bg-light sidebar">
            <h3>Room list</h3>
            <div className="sidebar-sticky">
                <RoomEntries roomsArr={roomsArr} chooseRoomHandler={chooseRoomHandler} />
            </div>
        </nav>
    )
}
