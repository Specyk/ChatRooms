import React, { useState } from 'react'
import RoomsCount from './RoomsCount'

export default function Header() {
    const [roomsCount, setRoomsCount] = useState(14)
    return (
        <div className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0">
            <h1>ChatRooms</h1>
            <RoomsCount>{roomsCount}</RoomsCount>
        </div>
    )
}
