import { messageProps, friendRequestProps } from '../contexts/FriendContex'

// Messages

interface messagePythonProps {
    from_user: string,
    to_user: string,
    created_at: string,
    has_been_read: boolean,
    read_at: string | null
    content: string
}

interface messagesPythonProps {
    sent_messages: messagePythonProps[],
    received_messages: messagePythonProps[]
}

const parseMessagePython = (messagePython: messagePythonProps): messageProps => {
    const message: messageProps = {
        fromUser: messagePython.from_user,
        toUser: messagePython.to_user,
        createdAt: Date.parse(messagePython.created_at),
        hasBeenRead: messagePython.has_been_read,
        readAt: messagePython.read_at === null ? null : Date.parse(messagePython.read_at),
        content: messagePython.content
    }
    return message
}

interface createOnMessagesProps {
    setSentMessages: React.Dispatch<React.SetStateAction<messageProps[]>>,
    setReceivedMessages: React.Dispatch<React.SetStateAction<messageProps[]>>
}

export const createOnMessages = ({setSentMessages, setReceivedMessages}: createOnMessagesProps): 
((messagesPython: messagesPythonProps) => void) => {
    return (messagesPython: messagesPythonProps) => {
        const sentMessages: messageProps[] = messagesPython.sent_messages.map(parseMessagePython)
        const receivedMessages: messageProps[] = messagesPython.received_messages.map(parseMessagePython)
        setSentMessages(sentMessages)
        setReceivedMessages(receivedMessages)
    }
}

interface createOnReceivedMessageProps {
    setReceivedMessages: React.Dispatch<React.SetStateAction<messageProps[]>>
}

export const createOnReceivedMessage = ({setReceivedMessages}: createOnReceivedMessageProps): 
((messagePython: messagePythonProps) => void) => {
    return (messagePython: messagePythonProps) => {
        const receivedMessage: messageProps = parseMessagePython(messagePython)
        setReceivedMessages((prevReceivedMessages) => {
            return prevReceivedMessages.concat(receivedMessage)
        })
    }
}

// Friend Requests

interface friendRequestPythonProps {
    from_user: string,
    to_user: string,
    created_at: string
}

interface friendRequestsPythonProps {
    received_friend_requests: friendRequestPythonProps[],
    sent_friend_requests: friendRequestPythonProps[]
}

const parseFriendRequestPython = (friendRequestPython: friendRequestPythonProps): friendRequestProps => {
    const friendRequest: friendRequestProps = {
        fromUser: friendRequestPython.from_user,
        toUser: friendRequestPython.to_user,
        createdAt: Date.parse(friendRequestPython.created_at)
    }
    return friendRequest
}

interface createOnFriendRequestsProps {
    setSentFriendRequests: React.Dispatch<React.SetStateAction<friendRequestProps[]>>,
    setReceivedFriendRequests: React.Dispatch<React.SetStateAction<friendRequestProps[]>>
}

export const createOnFriendRequests = ({setSentFriendRequests, setReceivedFriendRequests}: createOnFriendRequestsProps):
((friendRequestsPython: friendRequestsPythonProps) => void) => {
    return (friendRequestsPython: friendRequestsPythonProps) => {
        const sentFriendRequest: friendRequestProps[] = friendRequestsPython.sent_friend_requests.map(parseFriendRequestPython)
        const receivedFriendRequests: friendRequestProps[] = friendRequestsPython.received_friend_requests.map(parseFriendRequestPython)
        setSentFriendRequests(sentFriendRequest)
        setReceivedFriendRequests(receivedFriendRequests)
    }
}

interface createOnReceivedFriendRequestsProps {
    setReceivedFriendRequests: React.Dispatch<React.SetStateAction<friendRequestProps[]>>
}

export const createOnReceivedFriendRequest = ({setReceivedFriendRequests}: createOnReceivedFriendRequestsProps): 
((friendRequestPython: friendRequestPythonProps) => void) => {
    return (friendRequestPython: friendRequestPythonProps) => {
        const receivedFriendRequest: friendRequestProps = parseFriendRequestPython(friendRequestPython)
        setReceivedFriendRequests((prevReceivedFriendRequests) => {
            return prevReceivedFriendRequests.concat(receivedFriendRequest)
        })
    }
}
