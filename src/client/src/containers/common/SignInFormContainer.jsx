import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from 'actions/userActions'
import { reduxForm } from 'redux-form'
import SignInForm from 'components/common/SignInForm'


const SignInReduxForm = reduxForm({
    form: "signIn"
})(SignInForm)

export default () => {
    const dispatch = useDispatch()
    const onSignInSubmit = ({ username }) => {
        dispatch(signIn(username))
    }

    return (
        <SignInReduxForm onSubmit={onSignInSubmit} />
    )
}