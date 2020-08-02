import React from 'react'
import RoomEntries from './RoomEntries'

export default function RoomList({ rooms }) {
    return (
        <nav className="bg-light sidebar">
            <h3>Room list</h3>
            <div className="sidebar-sticky">
                <RoomEntries roomsArr={rooms} />
            </div>
        </nav>
    )
}