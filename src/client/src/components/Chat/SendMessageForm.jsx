import React, { useState } from 'react'

export default function SendMessageForm({ onSendMessage }) {
    const [message, setMessage] = useState('')

    return (
        <form onSubmit={() => onSendMessage(message)}>
            <div className="form-group">
                <input type="text" onChange={e => setMessage(e.target.value)} className="form-control" placeholder="Your message..." />
                <input type="submit" value="Send" />
            </div>
        </form>
    )
}
