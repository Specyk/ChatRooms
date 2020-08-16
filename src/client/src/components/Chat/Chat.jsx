import React, { Fragment } from 'react'
import MessagesList from './MessagesList/MessagesList'
import MembersList from './MembersList/MembersList'
import SendMessageForm from './SendMessageForm'
import SignInFormContainer from 'containers/common/SignInFormContainer'
import './Chat.less'

export default function Chat({ user, name, messages, members, onSendMessage }) {
    const renderMainChat = () => user ?
        <span></span> :
        <p>To read and send messages you have to sign in</p>

    return (
        <div className="Chat">
            <header>{name}</header>
            <main>
                <MessagesList messagesArr={messages} />
                <SendMessageForm onSubmit={onSendMessage} />
            </main>
            <aside>
                <MembersList membersArr={members} />
            </aside>
        </div>
    )
}
