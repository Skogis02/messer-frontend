import React from 'react'
import './styles/Message.css'
import { messageProps } from '../contexts/FriendContex'

interface props {
  message: messageProps
}

export const Message: React.FC<props> = ({message}: props) => {

  return (
    
    <div className='message'>
        {message.content}
    </div>
  )
}
