import React from 'react'
import './styles/Friend.css'
import { useFriendContext } from '../contexts/FriendContext'

interface friendProps {
    friendUsername: string;
}

export const Friend = ({friendUsername}: friendProps) => {

    const friendContext = useFriendContext()

    return (
        <button
        className={friendUsername === friendContext.selectedFriend ? 'friend-selected' : 'friend'}
        onClick={
            () => friendContext.setSelectedFriend(friendUsername)
        }
        >
            {friendUsername}
        </button>
    )
}
