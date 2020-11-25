import React from 'react'

function Message(data) {
    return (
        <div>
            <p>{data.username}: {data.text}</p>
        </div>
    )
}

export default Message
