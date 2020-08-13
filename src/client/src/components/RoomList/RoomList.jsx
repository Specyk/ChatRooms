import React from 'react'
import RoomEntries from './RoomEntries'
import './RoomList.less'

const createAddBtn = (isActive, onClickHandler) => {
    const className = `addBtn${isActive ? ' active' : ''}`
    return <button onClick={() => onClickHandler()} className={className}>+</button>
}

export default function RoomList({ rooms, isAdding: isRoomCreating, onAddIconClick }) {
    return (
        <div className="RoomList">
            <header>
                <h3>Room list</h3>
                {createAddBtn(isRoomCreating, onAddIconClick)}
            </header>
            <main>
                <RoomEntries isRoomCreating={isRoomCreating} roomsArr={rooms} />
            </main>
        </div>
    )
}