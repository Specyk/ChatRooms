import React, { Fragment } from 'react'
import { Link, } from "react-router-dom";

export default function RoomEntry({ id, name, members, lastActivityTime, onClickHandler }) {
    const routePath = `/chat/${id}`
    return (
        <Fragment>
            <Link to={routePath}>
                <div>
                    <span>{name}</span>
                </div>
            </Link>
            <div>
                <span className="badge badge-primary badge-pill">{members.length}</span>
            </div>

        </Fragment>
    )
}
