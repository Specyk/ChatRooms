import React from 'react'
import SignInForm from '../components/SignInForm'
import { useDispatch } from 'react-redux'
import { signIn } from '../actions/userActions'

export default function SignInContainer({ children }) {
    const dispatch = useDispatch()
    const onSignInSubmit = (nickname) => {
        dispatch(signIn(nickname))
    }

    return (
        <SignInForm onSignInSubmit={onSignInSubmit} />
    )
}
