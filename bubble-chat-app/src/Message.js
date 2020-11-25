//rfce - ES7 shortcut
import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import './Message.css'

function Message({username, message}) {
    const isUser = username === message.username;           //checking if current username is same as the message's username
    return (
        <div className={`message ${isUser && 'message__user'}`}>    {/*the general class or the user class if message sender is the user */}
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>   {/*user or guest card format using BEM*/}          
                <CardContent>
                    <Typography className="message__card" color="textSecondary" variant="h5">
                        {message.username}: {message.message}
                    </Typography>
                    
                </CardContent>
            </Card>
        </div>

    )
}

export default Message
