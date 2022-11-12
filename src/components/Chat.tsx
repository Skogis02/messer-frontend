import React from 'react'
import { Message, } from './Message'
import './styles/Chat.css'

export interface messageProps {
    fromUser: string,
    content: string,
    createdAt: number,
}

export interface chatProps {
    friend: string
    sentMessages: messageProps[],
    receivedMessages: messageProps[],
}




export const Chat: React.FC<chatProps> = ({friend, sentMessages, receivedMessages}: chatProps) => {

    interface createMessageProps {
        sent: boolean;
        content: string
    }

    const CreateMessage = ({sent, content}: createMessageProps): JSX.Element => {
        if (sent) {
            return (
                <div className='sent-div'>
                    <Message>
                        {content}
                    </Message>
                </div>
            )
        } else {
            return (
                <div className='received-div'>
                    <Message>
                        {content}
                    </Message>
                </div>
            )
        }
    }

    const RenderMessages = () => {
        const messageArr: JSX.Element[] = []
        let r: number = 0
        for (const sent of sentMessages) {
            while (
                r < receivedMessages.length &&
                sent.createdAt > receivedMessages[r].createdAt
            ) {
                if (receivedMessages[r].fromUser === friend) {
                    messageArr.push(
                        CreateMessage({sent: false, content: receivedMessages[r].content})
                    )
                }
                r++
            }
            messageArr.push(
                CreateMessage({sent: true, content: sent.content})
            )

        }
        while (r < receivedMessages.length) {
            if (receivedMessages[r].fromUser === friend) {
                messageArr.push(
                    CreateMessage({sent: false, content: receivedMessages[r].content})
                )
            }
            r++
        }
        return messageArr
    }


    return (
    <div className='chat'>
        {RenderMessages()}
    </div>
  )
}
