import React, {PropsWithChildren, createContext, useContext, useState, useEffect} from 'react'
import { getFriendsRequest } from '../api/requests'
import { getCookie } from 'typescript-cookie'

export interface messageProps {
    fromUser: string,
    toUser: string,
    createdAt: number,
    hasBeenRead: boolean,
    readAt: boolean|null,
    content: string
}

interface friendContextProps {
    friends: string[],
    selectedFriend: string,
    sentMessages: messageProps[],
    receivedMessages: messageProps[],
    setFriends: React.Dispatch<React.SetStateAction<string[]>>,
    setSelectedFriend: React.Dispatch<React.SetStateAction<string>>,
    setSentMessages: React.Dispatch<React.SetStateAction<messageProps[]>>,
    setReceivedMessages: React.Dispatch<React.SetStateAction<messageProps[]>>
}

const FriendContext = createContext<friendContextProps|undefined>(undefined)

export const useFriendContext = () => {
    const context = useContext(FriendContext)
    if (context === undefined) {
        throw new Error('FriendContext is undefined')
    }
    return context
}

interface friendProviderProps extends PropsWithChildren {}

export const FriendProvider: React.FC<friendProviderProps> = ({children}: friendProviderProps) => {
    const [friends, setFriends] = useState<string[]>([])
    const [selectedFriend, setSelectedFriend] = useState<string>('')
    const [sentMessages, setSentMessages] = useState<messageProps[]>([])
    const [receivedMessages, setReceivedMessages] = useState<messageProps[]>([])

    useEffect(() => {
        const asyncGet = async () => {
            const token = getCookie('csrftoken')
            if (token === undefined) throw new Error('csrftoken is undefined!')
            const [status, data] = await getFriendsRequest(token)
            if (!status) throw new Error(data)
            setFriends(data)
        }
        asyncGet()
    })

    const context: friendContextProps = {
        friends: friends,
        selectedFriend: selectedFriend,
        sentMessages: sentMessages,
        receivedMessages: receivedMessages,
        setFriends: setFriends,
        setSelectedFriend: setSelectedFriend,
        setSentMessages: setSentMessages,
        setReceivedMessages: setReceivedMessages
    }

    return(
        <FriendContext.Provider value={context}>
            {children}
        </FriendContext.Provider>
    )
}
