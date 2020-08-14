import React from 'react'

import AccountStuff from './AccountStuff'
import './Welcome.less'

export default function Welcome({ username }) {
    return (
        <div className="Welcome">
            <section>
                <h2>Welcome to ChatRooms!</h2>
                <p>Let's start chatting today for free.</p>
            </section>
            <section>
                <AccountStuff username={username} />
            </section>

        </div>
    )
}
