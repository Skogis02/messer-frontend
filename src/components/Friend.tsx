import React from 'react'
import './styles/Friend.css'

interface friendProps {
    friendUsername: string;
    isSelected: boolean
}

export const Friend = ({friendUsername, isSelected}: friendProps) => {
  return (
    <button
    className={isSelected ? 'friend-selected' : 'friend'}
    >
        {friendUsername}
    </button>
  )
}
