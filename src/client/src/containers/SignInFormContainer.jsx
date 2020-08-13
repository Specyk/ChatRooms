import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../actions/userActions'
import { reduxForm } from 'redux-form'
import SignInForm from 'components/SignInForm'

const onSignInSubmit = ({ username }) => {
    console.log(username)
}


const SignInReduxForm = reduxForm({
    form: "signIn"
})(SignInForm)
// ! przerobić SignInForm na class component albo jakos to roziwazac

export default () => {
    return (
        <SignInReduxForm onSubmit={onSignInSubmit} />
    )
}