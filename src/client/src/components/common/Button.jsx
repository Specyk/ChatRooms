import React from 'react'
import './Button.less'

export default function Button({ children, type }) {
    return (
        <button className="Button" type={type || 'button'}>{children}</button>
    )
}
