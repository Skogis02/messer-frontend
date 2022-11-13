import { messageProps } from '../contexts/FriendContex'

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

const parseMessagePython = (messagePython: messagePythonProps) => {
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
        console.log(messagesPython.sent_messages)
        const sentMessages: messageProps[] = messagesPython.sent_messages.map(parseMessagePython)
        const receivedMessages: messageProps[] = messagesPython.received_messages.map(parseMessagePython)
        setSentMessages(sentMessages)
        setReceivedMessages(receivedMessages)
    }
}