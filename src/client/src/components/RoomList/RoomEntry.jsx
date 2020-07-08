import React, { Fragment } from 'react'

export default function RoomEntry({ name, members, lastActivityTime, onClickHandler }) {
    return (
        <Fragment>
            <div onClick={onClickHandler}>
                <span>{name}</span>
                <span>{lastActivityTime}</span>
            </div>
            <div>
                <span className="badge badge-primary badge-pill">{members}</span>
            </div>

        </Fragment>
    )
}
