import React, { ChangeEvent, useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { useFriendContext, messageProps } from '../contexts/FriendContext'
import './styles/ChatInputField.css'

export const ChatInputField: React.FC = () => {
  const [content, setContent] = useState<string>('')

  const authContext = useAuthContext()
  const friendContext = useFriendContext()

  const handleSumbit = () => {
    authContext.useSocket().send(
      JSON.stringify({
        endpoint: 'send_message',
        content: {
          friend: friendContext.selectedFriend,
          content: content
        }
      })
    )
    setContent('')
    const message: messageProps = {
      toUser: friendContext.selectedFriend,
      fromUser: '',
      hasBeenRead: false,
      createdAt: Date.now(),
      readAt: null,
      content: content
    }
    friendContext.setSentMessages((prevSentMessages: messageProps[]) => prevSentMessages.concat(message))
  }

  return (
    <div
    className='chat-input-field'
    >
        <input
        onChange={((event: ChangeEvent<HTMLInputElement>) => setContent(event.target.value))}
        className='univ-input'
        type='text'
        value={content}
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
