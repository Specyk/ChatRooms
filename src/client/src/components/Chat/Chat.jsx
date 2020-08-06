import React from 'react'
import MessagesList from './MessagesList/MessagesList'
import MembersList from './MembersList/MembersList'
import SendMessageForm from './SendMessageForm'
import SignInFormContainer from 'containers/SignInFormContainer'
import './Chat.less'

export default function Chat({ user, name, messages, members, onSendMessage }) {
    const renderMainChat = () => {
        if (user) {
            return (
                <div className="Chat">
                    <main>
                        <MessagesList messagesArr={messages} />
                        <SendMessageForm onSendMessage={onSendMessage} />
                    </main>
                    <aside>
                        <MembersList membersArr={members} />
                    </aside>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        To read and send messages you have to sign in
                    </div>
                    <SignInFormContainer />
                </div>
            )
        }
    }

    return (
        <div className="Chat">
            <div>
                <h3>{name}</h3>
            </div>
            { renderMainChat()}
        </div>
    )
}
