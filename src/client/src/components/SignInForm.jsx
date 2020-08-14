import React from 'react'

import { Field } from 'redux-form'
import Button from 'components/common/Button'

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
            <Button type="submit">Sign in</Button>
        </form>
    )
}
