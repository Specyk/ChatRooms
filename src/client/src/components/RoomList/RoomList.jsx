import React from 'react'
import RoomEntries from './RoomEntries'

export default function RoomList({ rooms }) {
    return (
        <nav className="bg-light sidebar">
            <div className="row">
                <div><h3>Room list</h3></div>
                <div className="ml-auto mr-4">+</div>
            </div>
            <div className="sidebar-sticky">
                <RoomEntries roomsArr={rooms} />
            </div>
        </nav>
    )
}