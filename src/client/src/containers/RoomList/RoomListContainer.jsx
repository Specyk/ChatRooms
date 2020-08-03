import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadRooms } from '../../actions/roomsActions'
import RoomList from '../../components/RoomList/RoomList'

export default function RoomListContainer() {
    const roomsArr = useSelector(state => state.rooms)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadRooms())
    }, [dispatch])
    return (
        <RoomList rooms={roomsArr} />
    )
}