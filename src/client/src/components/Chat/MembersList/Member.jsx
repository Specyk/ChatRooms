import React, { Fragment } from 'react'

export default function Member({ username }) {
    return (
        <Fragment>
            <img className="mr-3" src="..." alt={username} />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{username}</h5>
            </div>
        </Fragment>
    )
}
