import React from 'react'
import SignInFormContainer from 'containers/SignInFormContainer'
import './Welcome.less'


export default function Welcome({ children, username }) {
    const renderAccountStuff = () => username ?
        (<h3>Hi {username}</h3>) :
        (<SignInFormContainer />)

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
