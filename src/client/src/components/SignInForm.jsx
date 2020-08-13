import React from 'react'
import { Field } from 'redux-form'

const renderInput = (formProps) => (
    <input
        type="text"
        onChange={formProps.input.onChange}
        value={formProps.input.value}
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
