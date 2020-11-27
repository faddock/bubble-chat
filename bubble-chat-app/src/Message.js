//rfce - ES7 shortcut
import React, { forwardRef } from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({username, message}, ref) => {
    const isUser = username === message.username;           //checking if current username is same as the message's username
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>    {/*the general class or the user class if message sender is the user */}
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>   {/*user or guest card format using BEM*/}          
                <CardContent>
                    <Typography color="textSecondary" variant="h5" component="h2">
                        {/*Unknown users should not be allowed, but just for now, all unkown users are same(two tpes: enter to skip, and cancel to skip)*/}
                        {!isUser && `${message.username || 'Unkown User'}: `} {message.message}      {/* string interpolation: `${message.username} says` */}
                    </Typography>
                    
                </CardContent>
            </Card>
        </div>

    )
})

export default Message
