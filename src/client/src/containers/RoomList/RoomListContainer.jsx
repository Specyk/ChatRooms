import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRooms } from '../../actions/roomsActions'
import RoomList from '../../components/RoomList/RoomList'
import { clickCreateRoom } from '../../actions/roomsActions'

export default function RoomListContainer() {
    const roomsArr = useSelector(state => state.roomsList.rooms)
    const isRoomCreating = useSelector(state => state.roomsList.isRoomCreating)
    const dispatch = useDispatch()

    const switchAdding = () => {
        dispatch(clickCreateRoom())
    }

    useEffect(() => {
        dispatch(fetchRooms())
    }, [dispatch])
    return (
        <RoomList rooms={roomsArr} isAdding={isRoomCreating} onAddIconClick={switchAdding} />
    )
}