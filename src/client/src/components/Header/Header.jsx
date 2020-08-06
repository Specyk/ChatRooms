import React from 'react'
import { Link } from 'react-router-dom'
import RoomsCount from './RoomsCount'
import './Header.less'

export default function Header({ roomsCount }) {
    return (
        <nav className="Header">
            <h1><Link to="/">ChatRooms</Link></h1>
            <RoomsCount>{roomsCount}</RoomsCount>
        </nav>
    )
}
