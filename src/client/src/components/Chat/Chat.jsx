import React from 'react'
import MessagesList from './MessagesList/MessagesList'
import MembersList from './MembersList/MembersList'
import SendMessageForm from './SendMessageForm'

const sendMessageHandler = e => {
    console.log(`Kliknięty`)
}

const getMessages = () => [
    {
        author: "autor w",
        content: "jakas wiadomosc",
        date: "wczoraj"
    },
    {
        author: "autor w",
        content: "jakas wiadomosc",
        date: "wczoraj"
    },
    {
        author: "autor w",
        content: "jakas wiadomosc",
        date: "wczoraj"
    }
]
const getMembers = () => [
    {
        username: "edek"
    },
    {
        username: "franek"
    },
    {
        username: "adam"
    }
]


export default function Chat() {
    return (
        <div className="row">
            <div className="col-md-8">
                <MessagesList messagesArr={getMessages()} />
                <SendMessageForm submitHandler={sendMessageHandler} />
            </div>
            <div className="col-md-4">
                <MembersList membersArr={getMembers()} />
            </div>
        </div>
    )
}
