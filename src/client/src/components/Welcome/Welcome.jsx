import React from 'react'
import SignInForm from './SignInForm'

export default function Welcome({ children, authorize }) {

    const onSignInSubmit = (nickname) => (e) => {
        e.preventDefault()
        authorize(nickname)
    }

    return (
        <div class="jumbotron jumbotron-fluid">

            <SignInForm onSignInSubmit={onSignInSubmit}></SignInForm>
            <div class="container">
                <h1 class="display-4">Welcome!</h1>
                <p class="lead">{children}</p>
            </div>
        </div>)
}
