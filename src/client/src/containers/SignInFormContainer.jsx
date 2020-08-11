import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../actions/userActions'
import { reduxForm } from 'redux-form'
import SignInForm from 'components/SignInForm'

const SignInFormContainer = reduxForm({
    form: "signIn"
})(SignInForm)

export default function SignInContainer({ children }) {
    const dispatch = useDispatch()
    const onSignInSubmit = ({ nickname }) => {
        dispatch(signIn(nickname))
    }

    return (
        <SignInFormContainer onSubmit={onSignInSubmit} />
    )
}
