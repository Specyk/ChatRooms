import React from 'react'
import { reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'

import NewRoomEntry from 'components/RoomList/NewRoomEntry'
import { createRoom } from 'actions/roomsActions'

const NewRoomEntryReduxForm = reduxForm(
    { form: 'createRoom' }
)(NewRoomEntry)

export default () => {
    const dispatch = useDispatch()

    const onCreateRoomSubmit = ({ roomName }) => {
        dispatch(createRoom(roomName))
    }

    return (
        <NewRoomEntryReduxForm onSubmit={onCreateRoomSubmit} />
    )
}