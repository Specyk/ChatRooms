import React, { Fragment } from 'react'
import SignInForm from 'containers/SignInFormContainer'
import './Welcome.less'

export default function Welcome({ children, username }) {
    const renderAccountStuff = () => username ? (
        <h3>Hi {username}</h3>
    ) : (<SignInForm />)
    return (
        <div className="Welcome">
            <section>
                <h2>Welcome!</h2>
                <p>{children}</p>
            </section>
            <section>
                {renderAccountStuff()}
            </section>

        </div>
    )
}
