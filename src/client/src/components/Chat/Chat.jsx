import React from 'react'
import MessagesList from './MessagesList/MessagesList'
import MembersList from './MembersList/MembersList'
import SendMessageForm from './SendMessageForm'
import SignInFormContainer from '../../containers/SignInFormContainer'

export default function Chat({ user, name, messages, members, onSendMessage }) {
    const renderMainChat = () => {
        if (user) {
            return (
                <div className="row">
                    <div className="col-md-8 position-relative">
                        <MessagesList messagesArr={messages} />
                        <SendMessageForm onSendMessage={onSendMessage} />
                    </div>
                    <div className="col-md-4">
                        <MembersList membersArr={members} />
                    </div>
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
        <div>
            <div className="row">
                <h3>{name}</h3>
            </div>
            { renderMainChat()}
        </div>
    )
}
