import React, { ChangeEvent } from 'react'
import { useFriendContext, friendRequestProps } from '../contexts/FriendContext'
import { useAuthContext } from '../contexts/AuthContext'
import './styles/ReceivedFriendRequest.css'

interface receivedFriendRequestProps {
    friendRequest: friendRequestProps
}


export const ReceivedFriendRequest: React.FC<receivedFriendRequestProps> = ({friendRequest}: receivedFriendRequestProps) => {

    const friendContext = useFriendContext()
    const authContext = useAuthContext()
    const socket = authContext.useSocket() 
    const asyncGetFriends = friendContext.asyncGetFriends

    const handleClick = (accept: boolean) => {
        socket.send(JSON.stringify({
            endpoint: 'respond_to_friend_request',
            content: {
                from_user: friendRequest.fromUser,
                accept: accept
            }
        }))
        socket.send(JSON.stringify({
            endpoint: 'get_friend_requests',
            content: {}
        }))
        if (accept) {
            setTimeout(() => asyncGetFriends(), 500)
        }
    }
  
    return (
        <div
        className='received-friend-request'
        >
            <div
            className='friend-username'
            >
                Friend Request from '{friendRequest.fromUser}''
            </div>
            <button
            className='accept-button'
            onClick={
                () => handleClick(true)
            }
            >
                Accept
            </button>
            <button
            className='reject-button'
            onClick={
                () => handleClick(false)
            }
            >
                Reject
            </button>
        </div>
    )
}
