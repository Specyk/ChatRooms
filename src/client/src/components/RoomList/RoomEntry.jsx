import React, { Fragment } from 'react'
import { Link, } from "react-router-dom";

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


export default function RoomEntry({ id, name, members, lastActivityTime, user }) {
    const routePath = `/chat/${id}`
    return (
        <div>
            {createLink(name, routePath)}
            <span className="badge">{members.length}</span>
        </div>
    )
}
