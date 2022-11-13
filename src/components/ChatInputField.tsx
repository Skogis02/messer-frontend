import React, { ChangeEvent, useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { useFriendContext } from '../contexts/FriendContex'
import './styles/ChatInputField.css'

export const ChatInputField: React.FC = () => {
  const [message, setMessage] = useState<string>('')

  const authContext = useAuthContext()
  const friendContext = useFriendContext()

  const handleSumbit = () => {
    authContext.useSocket().send(
      JSON.stringify({
        endpoint: 'send_message',
        content: {
          friend: friendContext.selectedFriend,
          content: message
        }
      })
    )
    setMessage('')
  }

  return (
    <div
    className='chat-input-field'
    >
        <input
        onChange={((event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value))}
        className='univ-input'
        type='text'
        value={message}
        >
        </input>
        <button
        onClick={handleSumbit}
        className='send-button'
        >
          Send!
        </button>
    </div>
  )
}
