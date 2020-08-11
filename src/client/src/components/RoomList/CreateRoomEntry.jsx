import React from 'react'
import { reduxForm, Field } from 'redux-form'

function CreateRoomEntry({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="roomName" type="text" placeholder="Enter room name" />
            <button type="submit">Create</button>
        </form>
    )
}

export default reduxForm({
    form: "createRoom"
})(CreateRoomEntry)