import React from 'react'
import './styles/ChatInputField.css'

export const ChatInputField: React.FC = () => {
  return (
    <div
    className='chat-input-field'
    >
        <input
        className='univ-input'
        type='text'>
        </input>
        <button
        className='send-button'
        >
          Send!
        </button>
    </div>
  )
}
