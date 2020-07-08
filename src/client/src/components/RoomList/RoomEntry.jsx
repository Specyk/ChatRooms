import React, { Fragment } from 'react'

export default function RoomEntry({ id, name, members, lastActivityTime, onClickHandler }) {
    return (
        <Fragment>
            <div onClick={onClickHandler(id)}>
                <span>{name}</span>
            </div>
            <div>
                <span className="badge badge-primary badge-pill">{members}</span>
            </div>

        </Fragment>
    )
}
