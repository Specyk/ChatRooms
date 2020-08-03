import React from 'react'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'

export default function HeaderContainer() {
    const roomsCount = useSelector(state => state.rooms.length)

    return (
        <Header roomsCount={roomsCount} />
    )
}
