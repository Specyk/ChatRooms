import React from 'react'
import { Field } from 'redux-form'

const renderInput = ({ input }) => (
    <input
        type="text"
        onChange={input.onChange}
        value={input.value}
        placeholder="Your username"
    />
)

export default function SignInForm({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={renderInput} name="username" />
            <button type="submit">Sign in</button>
        </form>
    )
}
