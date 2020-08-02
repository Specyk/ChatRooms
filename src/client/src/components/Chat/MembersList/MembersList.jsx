import React from 'react'
import Member from './Member'

export default function MembersList({ membersArr }) {
    const createMember = ({ name }) => (
        <Member username={name} />
    )
    return (
        <ul className="list-unstyled">
            {membersArr.map((m, key) => <li key={key} className="media">{createMember(m)}</li>)}
        </ul>
    )
}
