import React from 'react'
import './styles/FriendList.css'
import { Friend } from './Friend'
import { useFriendContext, friendRequestProps} from '../contexts/FriendContext'
import { FriendRequestInputField } from './FriendRequestInputField'
import { ReceivedFriendRequest } from './ReceivedFriendRequest'

interface renderFriendsProps {
  friends: string[],
  selectedFriend: string,
}

const RenderFriends = ({friends, selectedFriend}: renderFriendsProps): JSX.Element[] => {
  const friendsArr = []
  for (const friend of friends) {
    friendsArr.push(
      <Friend
        friendUsername={friend}
      />
    )
  }
  return(friendsArr)
}

interface renderFriendRequestsProps {
  sent: boolean,
  friendRequests: friendRequestProps[]
}

const RenderFriendRequests = ({sent, friendRequests}: renderFriendRequestsProps) => {
  const friendRequestArr = []

  for (const friendRequest of friendRequests) {
    friendRequestArr.push(
        sent ? 
        null
        :
        <ReceivedFriendRequest
          friendRequest={friendRequest}
        />
    )
  }
  return friendRequestArr
}


export const FriendList: React.FC = () => {

  const friendContext = useFriendContext()

  return (
    <div className='friend-list'>
      <div className='friend-container'>
        <>
          {RenderFriends({
            friends: friendContext.friends,
            selectedFriend: friendContext.selectedFriend,
          })}
        </>
        <>
          {RenderFriendRequests({
            sent: false, 
            friendRequests: friendContext.receivedFriendRequests})}
        </>
      </div>
      <FriendRequestInputField/>
    </div>
  )
}
