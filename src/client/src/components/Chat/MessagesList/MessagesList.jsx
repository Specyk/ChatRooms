import React, { Fragment } from 'react'
import Message from './Message'

export default function MessagesList({ messagesArr }) {
    const renderMessage = (messageData) => (
        <Message date={messageData.date} author={messageData.author}>{messageData.content}</Message>
    )

    const renderContent = () => {
        return messagesArr > 0 ?
            <ul className="list-unstyled">
                {messagesArr.map((m, key) => <li key={key} className="media">{renderMessage(m)}</li>)}
            </ul> :
            <p>No messages</p>
    }
    return (
        <Fragment>
            {renderContent()}
        </Fragment>
    )


    return (
        <div>
            {renderContent()}
        </div>
    )
}
