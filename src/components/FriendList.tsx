import React from 'react'
import './styles/FriendList.css'
import { Friend } from './Friend'
import { useFriendContext } from '../contexts/FriendContex'

interface friendListProps {
  friends: string[],
  selectedFriend: string,
  setSelectedFriend: React.Dispatch<React.SetStateAction<string>>
}

export const FriendList: React.FC<friendListProps> = ({friends, selectedFriend, setSelectedFriend}: friendListProps) => {

  const RenderFriends = (): JSX.Element[] => {
    const friendsArr = []
    for (const friend of friends) {
      friendsArr.push(
        <Friend
          friendUsername={friend}
          isSelected={friend === selectedFriend}
          setSelectedFriend={setSelectedFriend}
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
