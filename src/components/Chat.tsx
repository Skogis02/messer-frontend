import React from 'react'
import { Message } from './Message'
import { ChatInputField } from './ChatInputField'
import { useFriendContext, messageProps } from '../contexts/FriendContex'
import './styles/Chat.css'

const sentMessages: messageProps[] = [
    {
        fromUser: 'skogis',
        toUser: 'kalle',
        createdAt: 1,
        hasBeenRead: false,
        readAt: null,
        content: 'hej!'
    },
    {
        fromUser: 'skogis',
        toUser: 'kalle',
        createdAt: 2,
        hasBeenRead: false,
        readAt: null,
        content: 'hej2!'
    },
    {
        fromUser: 'skogis',
        toUser: 'per',
        createdAt: 2,
        hasBeenRead: false,
        readAt: null,
        content: 'hej per!'
    }
]

const receivedMessages: messageProps[] = [
    {
        fromUser: 'kalle',
        toUser: 'skogis',
        createdAt: 1,
        hasBeenRead: false,
        readAt: null,
        content: 'hej på dig!'
    },
    {
        fromUser: 'kalle',
        toUser: 'skogis',
        createdAt: 1,
        hasBeenRead: false,
        readAt: null,
        content: 'hej på dig2!'
    },
    {
        fromUser: 'per',
        toUser: 'skogis',
        createdAt: 1,
        hasBeenRead: false,
        readAt: null,
        content: 'hej på dig skogis!'
    },
]

interface createMessageProps {
    sent: boolean,
    message: messageProps
}

const CreateMessage = ({sent, message}: createMessageProps): JSX.Element => {
    return (
        <div className={sent ? 'sent-div': 'received-div'}>
            <Message message={message} sent={sent}/>
        </div>
    )
}

interface renderMessagesProps {
    selectedFriend: string,
    sentMessages: messageProps[],
    receivedMessages: messageProps[],
}

const RenderMessages = ({selectedFriend, sentMessages, receivedMessages}: renderMessagesProps): JSX.Element[] => {
    const messageArr: JSX.Element[] = []
    let r: number = 0
    for (const sent of sentMessages) {
        while (
            r < receivedMessages.length &&
            sent.createdAt > receivedMessages[r].createdAt
        ) {
            if (receivedMessages[r].fromUser === selectedFriend) {
                messageArr.push(
                    CreateMessage({sent: false, message: receivedMessages[r]})
                )
            }
            r++
        }
        if (sent.toUser === selectedFriend) {
            messageArr.push(
                CreateMessage({sent: true, message: sent})
            )
        }
    }
    while (r < receivedMessages.length) {
        if (receivedMessages[r].fromUser === selectedFriend) {
            messageArr.push(
                CreateMessage({sent: false, message: receivedMessages[r]})
            )
        }
        r++
    }
    return messageArr
}

export const Chat: React.FC = () => {

    const friendContext = useFriendContext()
    friendContext.setSentMessages(sentMessages)
    friendContext.setReceivedMessages(receivedMessages)

    return (
    <div className='chat'>
        <div
        className='messages'
        >
            {RenderMessages({
                selectedFriend: friendContext.selectedFriend,
                sentMessages: friendContext.sentMessages,
                receivedMessages: friendContext.receivedMessages 
            })}
        </div>
        <ChatInputField/>
    </div>
  )
}
