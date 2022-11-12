import React from 'react'
import './styles/FriendList.css'
import { Friend } from './Friend'

interface friendListProps {
  friends: string[],
  selectedFriend: string
}

export const FriendList: React.FC<friendListProps> = ({friends, selectedFriend}: friendListProps) => {

  const RenderFriends = (): JSX.Element[] => {
    const friendsArr = []
    for (const friend of friends) {
      friendsArr.push(
        <Friend
          friendUsername={friend}
          isSelected={friend === selectedFriend}
        />
      )
    }
    return(friendsArr)
  }

  return (
    <div className='friend-list'>
      {RenderFriends()}
    </div>
  )
}
