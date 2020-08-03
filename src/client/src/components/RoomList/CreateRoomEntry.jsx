import React, { useState } from 'react'

const bind = setter => e => setter(e.target.value)

export default function CreateRoomEntry({ onCreateRoomSubmit }) {
    const [newRoomName, setNewRoomName] = useState('')

    const onCreateEntrySubmit = e => {
        e.preventDefault()
        onCreateRoomSubmit(newRoomName)
    }

    return (
        <form onSubmit={onCreateEntrySubmit}>
            <input type="text" placeholder="Enter room name" onChange={bind()} />
            <button type="submit">Create</button>
        </form>
    )
}
