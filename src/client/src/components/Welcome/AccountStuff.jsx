import React from 'react'

import AccountGreeting from './AccountGreeting'
import SignInFormContainer from 'containers/common/SignInFormContainer'

export default ({ username }) => (
    username ?
        <AccountGreeting username={username} /> :
        (
            <div className="AccountStuff">
                <h2>Sign in</h2>
                <SignInFormContainer />
            </div>
        )
)
