import React from 'react'
import { Field } from 'redux-form'

export default function SignIn({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <Field component="input" type="text" name="username" placeholder="Your username" />
            <button type="submit">Sign in</button>
        </form>
    )
}
