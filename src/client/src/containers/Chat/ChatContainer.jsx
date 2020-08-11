import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectRoom, sendMessage } from 'actions/selectedRoomActions'
import Chat from 'components/Chat/Chat'

export default function ChatContainer({ match }) {
    const name = useSelector(state => state.selectedRoom.name)
    const user = useSelector(state => state.user)
    const messages = useSelector(state => state.selectedRoom.messages)
    const members = useSelector(state => state.selectedRoom.members)
    const dispatch = useDispatch()

    const onSendMessage = ({ messageContent }) => {
        dispatch(sendMessage(match.params.chatRoomId, messageContent))
    }
    useEffect(() => {
        dispatch(selectRoom(match.params.chatId))
    }, [name, match.params.chatId, dispatch])
    return (
        <Chat user={user} name={name} messages={messages} members={members} onSendMessage={onSendMessage} />
    )
}

