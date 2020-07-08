import React, { Fragment } from 'react'

export default function RoomEntry({ name, members, lastActivityTime }) {
    return (
        <Fragment>
            <span>{name}</span>
            <span>{members}</span>
            <span>{lastActivityTime}</span>
        </Fragment>
    )
}
