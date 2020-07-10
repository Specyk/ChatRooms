import React from 'react'

export default function Welcome({ children }) {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Welcome!</h1>
                <p class="lead">{children}</p>
            </div>
        </div>)
}
