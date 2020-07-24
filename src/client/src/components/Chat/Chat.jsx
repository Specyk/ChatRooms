import React, { useEffect } from 'react'
import MessagesList from './MessagesList/MessagesList'
import MembersList from './MembersList/MembersList'
import SendMessageForm from './SendMessageForm'
import { useSelector, useDispatch } from 'react-redux'
import { selectRoom } from '../../actions/room.js'

export default function Chat({ match }) {
    const name = useSelector(state => state.selectedRoom.name)
    const messages = useSelector(state => state.messages)
    const members = useSelector(state => state.members)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(selectRoom(match.params.chatId))
    })
    return (
        <div className="row">
            <h3>{name}</h3>
            <div className="col-md-8">
                <MessagesList messagesArr={messages} />
                <SendMessageForm />
            </div>
            <div className="col-md-4">
                <MembersList membersArr={members} />
            </div>
        </div>
    )
}
