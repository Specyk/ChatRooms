import React from 'react'
import Message from './Message'

export default function MessagesList({ messagesArr }) {
    const createMessage = (messageData) => (
        <Message date={messageData.date} author={messageData.author}>{messageData.content}</Message>
    )
    return (
        <ul class="list-unstyled">
            {messagesArr.map(m => <li className="media">{createMessage(m)}</li>)}
        </ul>
    )
}
