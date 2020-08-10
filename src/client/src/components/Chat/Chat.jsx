import React, { Fragment } from 'react'
import MessagesList from './MessagesList/MessagesList'
import MembersList from './MembersList/MembersList'
import SendMessageForm from './SendMessageForm'
import SignInFormContainer from 'containers/SignInFormContainer'
import './Chat.less'

export default function Chat({ user, name, messages, members, onSendMessage }) {
    const renderMainChat = () => {
        if (user) {
            return (
                <Fragment>
                    <main>
                        <MessagesList messagesArr={messages} />
                        <SendMessageForm onSendMessage={onSendMessage} />
                    </main>
                    <aside>
                        <MembersList membersArr={members} />
                    </aside>
                </Fragment >
            )
        } else {
            return (
                <Fragment>
                    <main>
                        To read and send messages you have to sign in
                    </main>
                    <aside>
                        <SignInFormContainer />
                    </aside>
                </Fragment>
            )
        }
    }

    return (
        <div className="Chat">
            <h3>{name}</h3>
            {renderMainChat()}
        </div>
    )
}
