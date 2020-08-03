import React from 'react'
import SignInForm from '../../containers/Welcome/SignInFormContainer'

export default function Welcome({ children, username }) {
    const renderAccountStuff = () => username ? (
        <h3>Hi {username}</h3>
    ) : (<SignInForm />)
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">{children}</p>
            </div>
            {renderAccountStuff()}

        </div>)
}
