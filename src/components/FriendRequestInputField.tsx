import React, { ChangeEvent, useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { useFriendContext } from '../contexts/FriendContext'
import './styles/FriendRequestInputField.css'

export const FriendRequestInputField: React.FC = () => {
  const [friendUsername, setFriendUsername] = useState<string>('')

  const authContext = useAuthContext()
  const friendContext = useFriendContext()

  const handleSumbit = () => {
    if (friendContext.friends.includes(friendUsername)) return
    authContext.useSocket().send(
        JSON.stringify({
            endpoint: 'send_friend_request',
            content: {
                to_user: friendUsername
            }
        })
    )
    setFriendUsername('')
  }

  return (
    <div
    className='chat-input-field'
    >
        <input
        onChange={((event: ChangeEvent<HTMLInputElement>) => setFriendUsername(event.target.value))}
        className='univ-input'
        type='text'
        value={friendUsername}
        >
        </input>
        <button
        onClick={handleSumbit}
        className='send-button'
        >
          Add!
        </button>
    </div>
  )
}
