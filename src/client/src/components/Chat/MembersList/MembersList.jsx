import React from 'react'
import Member from './Member'

export default function MembersList({ membersArr }) {
    const createMember = ({ name }) => (
        <Member username={name} />
    )

    const renderContent = () => {
        return membersArr.length > 0 ?
            membersArr.map((m, key) => <li key={key} className="media">{createMember(m)}</li>) :
            <p>No members</p>
    }

    return (
        <ul className="MembersList">
            {renderContent()}
        </ul>

    )
}
