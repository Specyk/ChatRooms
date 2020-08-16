import React from 'react'
import { Link, } from "react-router-dom";

export default function RoomEntry({ id: roomEntryId, name, members, selectedRoomId }) {
    const routePath = `/chat/${roomEntryId}`
    // const formatClassName = roomEntryId => roomEntryId === id ? `selected` : ''
    const classNameStr = `${roomEntryId === selectedRoomId ? 'selected' : null}`
    return (
        <li key={roomEntryId} className={classNameStr}>
            <div>
                {createLink(name, routePath, true)}
                <span className="badge">{members.length}</span>
            </div>
        </li>
    )
}

const createLink = (name, routePath, isActive) => {
    return isActive ?
        <Link to={routePath}>
            <span>{name}</span>
        </Link>
        :
        <Link to={routePath} onClick={e => e.preventDefault()}>
            <span className="d-inline-block text-muted" data-toggle="tooltip" title="Disabled tooltip">{name}</span>
        </Link>
}
