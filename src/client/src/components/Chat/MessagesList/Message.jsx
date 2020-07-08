import React, { Fragment } from 'react'

export default function Message({ author, date, children }) {
    return (
        <Fragment>
            <img class="mr-3" src="..." alt={author} />
            <div class="media-body">
                <h5 class="mt-0 mb-1">{author}</h5>
                <span>{children}</span>
            </div>
        </Fragment>
    )
}
