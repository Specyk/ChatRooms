import React, { Fragment } from 'react'

export default function Member({ username }) {
    return (
        <Fragment>
            <img class="mr-3" src="..." alt={username} />
            <div class="media-body">
                <h5 class="mt-0 mb-1">{username}</h5>
            </div>
        </Fragment>
    )
}
