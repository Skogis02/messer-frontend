import React, {PropsWithChildren, createContext, useContext, useState, useEffect} from 'react'
import { message, friendRequest, friendship } from '../types/general'
import { apiError } from '../types/errors'
import { getCookie } from 'typescript-cookie'
import { useAuthContext } from './AuthContext'

interface friendContextProps {
    socket: WebSocket,
    apiErrors: Set<string>,
    outboundFriendships: friendship[],
    inboundFriendships: friendship[],
    sentFriendRequests: friendRequest[],
    receivedFriendRequests: friendRequest[],
    selectedFriend: string
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
    
    const [apiErrors, setApiErrors] = useState<{[code: string]: apiError}>({})
    const [outboundFriendships, setOutboundFriendships] = useState<friendship[]>([])
    const [inboundFriendships, setInboundFriendships] = useState<friendship[]>([])
    const [sentFriendRequests, setSentFriendRequests] = useState<friendRequest[]>([])
    const [receivedFriendRequests, setReceivedFriendRequest] = useState<friendRequest[]>([])
    const [selectedFriend, setSelectedFriend] = useState<string | null>()

    const authContext = useAuthContext()

    
    const context: friendContextProps = {
    }

    return(
        <FriendContext.Provider value={context}>
            {children}
        </FriendContext.Provider>
    )
}
