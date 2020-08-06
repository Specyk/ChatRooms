import React, { useState } from 'react'
import RoomEntries from './RoomEntries'
import './RoomList.less'

export default function RoomList({ rooms, isAdding, onAddIconClick }) {
    return (
        <div className="RoomList">
            <header>
                <h3>Room list</h3>
                <span onClick={() => onAddIconClick()} className="ml-auto mr-4">+</span>
            </header>
            <main>
                <RoomEntries isAdding={isAdding} roomsArr={rooms} />
            </main>
        </div>
    )
}