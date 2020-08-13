import React from 'react'
import { Field } from 'redux-form'

export default function NewRoomEntry({ handleSubmit }) {
    const createRoomNameInput = ({ input }) => (
        <input
            name="roomName"
            type="text"
            placeholder="Enter room name"
            onChange={input.onChange}
        />
    )
    return (
        <form onSubmit={handleSubmit}>
            <Field component={createRoomNameInput} />
            <button type="submit">Create</button>
        </form>
    )
}
