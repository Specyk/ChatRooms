import React, { Fragment } from 'react'
import { Link, } from "react-router-dom";

export default function RoomEntry({ id, name, members, lastActivityTime, user }) {
    const routePath = `/chat/${id}`
    return (
        <Fragment>
            {user ?
                <Link to={routePath}>
                    <div>
                        <span>{name}</span>
                    </div>
                </Link>
                :
                <Link to={routePath} onClick={e => e.preventDefault()}>
                    <div>
                        <span className="d-inline-block text-muted" data-toggle="tooltip" title="Disabled tooltip">{name}</span>
                    </div>
                </Link>
            }

            <div>
                <span className="badge badge-primary badge-pill">{members.length}</span>
            </div>

        </Fragment>
    )
}
