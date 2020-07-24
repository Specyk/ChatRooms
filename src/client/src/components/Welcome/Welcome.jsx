import React from 'react'
import SignInForm from './SignInForm'

export default function Welcome({ children, authorize }) {

    const onSignInSubmit = (nickname) => (e) => {
        e.preventDefault()
        authorize(nickname)
    }

    return (
        <div className="jumbotron jumbotron-fluid">

            <SignInForm onSignInSubmit={onSignInSubmit}></SignInForm>
            <div className="container">
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">{children}</p>
            </div>
        </div>)
}
