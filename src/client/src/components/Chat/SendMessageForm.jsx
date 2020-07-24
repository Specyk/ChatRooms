import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../actions/messages.js'

export default function SendMessageForm({ submitHandler }) {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const onFormSubmit = (message) => {
        dispatch(sendMessage(message))
    }
    return (
        <form onSubmit={onFormSubmit(message)}>
            <div class="form-group">
                <input type="text" onChange={e => setMessage(e.target.value)} class="form-control" placeholder="Your message..." />
                <input type="submit" value="Send" />
            </div>
        </form>
    )
}
