import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Field } from 'redux-form'
import Button from 'components/common/Button'
import './SignInForm.less'

export default function SignInForm({ handleSubmit }) {
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Login</label>
                    <Field component={renderLoginInput} name="username" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <Field component={renderPasswordInput} name="password" />
                </div>
                <Button type="submit">Sign in</Button>
            </form>
            <div className="buttons">
                <Link to="/register">Create new account</Link>
                <Link to="/forgotPassword">I forgot my password</Link>
            </div>
        </Fragment>
    )
}


const renderLoginInput = ({ input }) => (
    <input
        type="text"
        onChange={input.onChange}
        value={input.value}
        placeholder="Your username"
    />
)

const renderPasswordInput = ({ input }) => (
    <input
        type="password"
        onChange={input.onChange}
        value={input.value}
    />
)