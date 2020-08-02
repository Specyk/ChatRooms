import React from 'react'
import Message from './Message'

export default function MessagesList({ messagesArr }) {
    const createMessage = (messageData) => (
        <Message date={messageData.date} author={messageData.author}>{messageData.content}</Message>
    )
    return (
        <ul className="list-unstyled">
            {messagesArr.map(m => <li key={m._id} className="media">{createMessage(m)}</li>)}
        </ul>
    )
}
