import React from 'react'

export default function SendMessageForm({ submitHandler }) {
    return (
        <form>
            <div onSubmit={submitHandler} class="form-group">
                <input type="text" class="form-control" placeholder="Your message..." />
                <input type="submit" value="Send" />
            </div>
        </form>
    )
}
