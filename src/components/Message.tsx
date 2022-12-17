import React from 'react'
import './styles/Message.css'
import { messageProps } from '../contexts/FriendContext'

interface props {
  sent: boolean,
  message: messageProps
}

export const Message: React.FC<props> = ({sent, message}: props) => {

  return (

    <div className={sent ? 'sent-message': 'received-message'}>
        {message.content}
    </div>
  )
}
