import React from 'react'
import { useSelector } from 'react-redux'
import Welcome from '../../components/Welcome/Welcome'


export default function WelcomeContainer() {
    const username = useSelector(state => state.user)
    return (
        <Welcome username={username} />
    )
}