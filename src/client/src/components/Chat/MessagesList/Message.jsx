import React, { Fragment } from 'react'

export default function Message({ author, date, children }) {
    return (
        <Fragment>
            <img className="mr-3" src="..." alt={author} />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{author}</h5>
                <span>{children}</span>
            </div>
        </Fragment>
    )
}
