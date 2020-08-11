import React from 'react'
import Message from './Message'

export default function MessagesList({ messagesArr }) {
    const renderMessage = (messageData) => (
        <Message date={messageData.date} author={messageData.author}>{messageData.content}</Message>
    )

    const renderContent = () => {
        return messagesArr.length > 0 ?
            <ul className="list-unstyled">
                {messagesArr.map((m, key) => <li key={key} className="media">{renderMessage(m)}</li>)}
            </ul> :
            <p>No messages</p>
    }

    return (
        <div className="MessagesList">
            {renderContent()}
        </div>
    )
}
