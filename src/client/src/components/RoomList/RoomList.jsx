import React, { useState } from 'react'
import RoomEntries from './RoomEntries'

export default function RoomList({ rooms, isAdding, onAddIconClick }) {
    return (
        <nav className="bg-light sidebar">
            <div className="row">
                <div><h3>Room list</h3></div>
                <div onClick={() => onAddIconClick()} className="ml-auto mr-4">+</div>
            </div>
            <div className="sidebar-sticky">
                <RoomEntries isAdding={isAdding} roomsArr={rooms} />
            </div>
        </nav>
    )
}