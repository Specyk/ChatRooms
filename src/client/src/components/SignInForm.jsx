import React, { useState } from 'react'

const bind = setter => e => setter(e.target.value)

export default function SignIn({ onSignInSubmit }) {
    const onFormSubmit = e => {
        e.preventDefault()
        onSignInSubmit(nickname)
    }

    const [nickname, setNickname] = useState('')
    return (
        <form onSubmit={e => onFormSubmit(e)}>
            <input value={nickname} onChange={bind(setNickname)} type="text" placeholder="Your username" />
            <input type="submit" value="Sign in" />
        </form>
    )
}
