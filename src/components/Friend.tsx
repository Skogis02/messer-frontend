import React from 'react'
import './styles/Friend.css'

interface friendProps {
    friendUsername: string;
    isSelected: boolean;
    setSelectedFriend: React.Dispatch<React.SetStateAction<string>>
}

export const Friend = ({friendUsername, isSelected, setSelectedFriend}: friendProps) => {


    return (
        <button
        className={isSelected ? 'friend-selected' : 'friend'}
        onClick={
            () => setSelectedFriend(friendUsername)
        }
        >
            {friendUsername}
        </button>
    )
}
