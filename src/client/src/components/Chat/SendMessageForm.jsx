import React, { useState } from 'react'

export default function SendMessageForm({ submitHandler }) {
    const [message, setMessage] = useState('')
    return (
        <form onSubmit={submitHandler(message)}>
            <div class="form-group">
                <input type="text" onChange={e => setMessage(e.target.value)} class="form-control" placeholder="Your message..." />
                <input type="submit" value="Send" />
            </div>
        </form>
    )
}
