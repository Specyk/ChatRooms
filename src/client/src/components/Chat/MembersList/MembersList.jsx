import React from 'react'
import Member from './Member'

export default function MembersList({ membersArr }) {
    const createMember = (memberData) => (
        <Member username={memberData.username} />
    )
    return (
        <ul class="list-unstyled">
            {membersArr.map(m => <li className="media">{createMember(m)}</li>)}
        </ul>
    )
}
