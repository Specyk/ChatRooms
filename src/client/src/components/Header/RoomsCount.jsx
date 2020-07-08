import React from 'react'

export default function RoomsCount({ children }) {


    return (
        <div>
            <div className="text-center"><h2>{children}</h2></div>
            <div>available rooms</div>
        </div>
    )
}
