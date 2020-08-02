import React from 'react'
import MessagesList from './MessagesList/MessagesList'
import MembersList from './MembersList/MembersList'
import SendMessageForm from './SendMessageForm'

export default function Chat({ name, messages, members, onSendMessage }) {
    return (
        <div className="row">
            <h3>{name}</h3>
            <div className="col-md-8">
                <MessagesList messagesArr={messages} />
                <SendMessageForm onSendMessage={onSendMessage} />
            </div>
            <div className="col-md-4">
                <MembersList membersArr={members} />
            </div>
        </div>
    )
}
