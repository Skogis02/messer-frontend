import React from 'react'
import './styles/FriendList.css'
import { Friend } from './Friend'
import { useFriendContext } from '../contexts/FriendContex'
import { FriendRequestInputField} from './FriendRequestInputField'

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

export const FriendList: React.FC = () => {

  const friendContext = useFriendContext()

  return (
    <div className='friend-list'>
      <div className='friend-container'>
        {RenderFriends({
          friends: friendContext.friends,
          selectedFriend: friendContext.selectedFriend,
        })}
      </div>
      <FriendRequestInputField/>
    </div>
  )
}
