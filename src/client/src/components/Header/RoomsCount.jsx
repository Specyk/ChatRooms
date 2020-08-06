import React from 'react'

export default function RoomsCount({ children }) {
    return (
        <div className="RoomsCount">
            <div className="number">{children}</div>
            <footer>available rooms</footer>
        </div>
    )
}
