import React from 'react'
import './Chat.less'
import { Field, reduxForm } from 'redux-form'

function SendMessageForm({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className='SendMessageForm'>
            <Field name="messageContent" component="input" type="text" placeholder="Your message..." />
            <button type="submit">Send</button>
        </form>
    )
}
export default reduxForm({
    form: 'sendMessage'
})(SendMessageForm)
