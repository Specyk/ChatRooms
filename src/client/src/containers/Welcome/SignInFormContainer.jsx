import React from 'react'
import SignInForm from '../../components/Welcome/SignInForm'
import { useDispatch } from 'react-redux'
import { signIn } from '../../actions/userActions.js'

export default function SignInContainer({ children }) {
    const dispatch = useDispatch()
    const onSignInSubmit = (nickname) => {
        dispatch(signIn(nickname))
    }

    return (
        <SignInForm onSignInSubmit={onSignInSubmit} />
    )
}
