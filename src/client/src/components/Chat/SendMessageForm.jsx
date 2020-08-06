import React, { useState } from 'react'
import './Chat.less'

export default function SendMessageForm({ onSendMessage }) {
    const [message, setMessage] = useState('')

    return (
        <form className='SendMessageForm' onSubmit={() => onSendMessage(message)}>
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <input type="text" onChange={e => setMessage(e.target.value)} className="form-control" placeholder="Your message..." />
                </div>
                <div className="col-auto">
                    <input type="submit" value="Send" />
                </div>
            </div>
        </form>
    )
}
