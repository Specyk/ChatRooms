import React from 'react'
import { Field } from 'redux-form'
import Button from 'components/common/Button'

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
            <Button type="submit">Create</Button>
        </form>
    )
}
