import React, { Fragment } from 'react'
import SignInForm from 'containers/SignInFormContainer'

export default function Welcome({ children, username }) {
    const renderAccountStuff = () => username ? (
        <h3>Hi {username}</h3>
    ) : (<SignInForm />)
    return (
        <Fragment>
            <div className="Welcome">
                <h2>Welcome!</h2>
                <p>{children}</p>
            </div>
            { renderAccountStuff()}
        </Fragment >
    )
}
