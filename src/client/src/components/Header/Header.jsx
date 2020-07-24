import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RoomsCount from './RoomsCount'
import { useSelector } from 'react-redux'

export default function Header() {
    const roomsCount = useSelector(state => state.rooms.length)

    return (
        <div className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0">
            <h1><Link to="/">ChatRooms</Link></h1>
            <RoomsCount>{roomsCount}</RoomsCount>
        </div>
    )
}
