import React, { useEffect } from 'react'
import RoomEntries from './RoomEntries'
import './RoomList.less'

const createAddBtn = (isActive, onClickHandler) => {
    const className = `addBtn${isActive ? ' active' : ''}`
    return <button onClick={() => onClickHandler()} className={className}>+</button>
}

export default function RoomList({ rooms, isAdding, onAddIconClick }) {
    return (
        <div className="RoomList">
            <header>
                <h3>Room list</h3>
                {createAddBtn(isAdding, onAddIconClick)}
            </header>
            <main>
                <RoomEntries isAdding={isAdding} roomsArr={rooms} />
            </main>
        </div>
    )
}