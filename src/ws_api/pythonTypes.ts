import { message, friendRequest, friendship } from "../types/general"
import { apiError } from "../types/errors"
import React from "react"

interface wsError {
    error: string,
    code: string,
    content?: string
}

interface wsRequest<contentType> {
    endpoint: string,
    id: string,
    content?: contentType
}

interface wsResponse<contentType> {
    endpoint: string,
    id: string,
    content: contentType,
    errors: wsError[]
}

interface wsCallback<contentType> {
    type: string,
    code: string,
    content: contentType
}

// Objects:

interface wsFriend {
    friend: string,
    created_at: string
}

interface wsMessage {
    from_user: string,
    to_user: string,
    created_at: string,
    has_been_read: boolean,
    read_at: string | null
    content: string
}

interface wsFriendship {
    user: string
    friend: string,
    messages: wsMessage[]
}

interface wsFriendRequest {
    from_user: string,
    to_user: string,
    created_at: string
}

// Request Contents:

interface wsRequestSendMessage {
    to_user: string,
    content: string
}

interface wsRequestSendFriendRequest {
    to_user: string
}

interface wsRequestRespondToFriendRequest {
    from_user: string
}

interface wsRequestWithdrawFriendRequest {
    to_user: string
}

interface wsRequestRemoveFriendRequest {
    friend: string
}

// Response Contents:

interface wsResponseGetMessages {
    friendships: wsFriendship[],
    incoming_friendships: wsFriendship[]
}

interface wsResponseGetFriendRequests {
    sent_friend_requests: wsFriendRequest[],
    received_friend_requests: wsFriendRequest[]
}

// Deserializers

const messageDeserializer = (content: wsMessage): message => {
    const result: message = {
        fromUser: content.from_user,
        toUser: content.to_user,
        createdAt: Date.parse(content.created_at),
        hasBeenRead: content.has_been_read,
        readAt: content.read_at === null ? null : Date.parse(content.read_at),
        content: content.content
    }
    return result 
}

const friendRequestDeserializer = (content: wsFriendRequest): friendRequest => {
    const result: friendRequest = {
        fromUser: content.from_user,
        toUser: content.to_user,
        createdAt: Date.parse(content.created_at)
    }
}

const friendshipDeserializer = (content: wsFriendship): friendship => {
    const result: friendship = {
        user: content.user,
        friend: content.friend,
        messages: content.messages.map(messageDeserializer)
    }
    return result
}

// Ws Message Receiver:

interface createWsMessageReceiverProps {
    setApiErrors: React.Dispatch<React.SetStateAction<Set<string>>>,
    setOutboundFriendships: React.Dispatch<React.SetStateAction<friendship[]>>,
    setInboundFriendships: React.Dispatch<React.SetStateAction<friendship[]>>,
    setSentFriendRequests: React.Dispatch<React.SetStateAction<friendRequest[]>>
    setReceivedFriendRequests: React.Dispatch<React.SetStateAction<friendRequest[]>>,
}

const createWsMessageReceiver = (props: createWsMessageReceiverProps):
    ((event: MessageEvent) => void) => {
    return (
        (event: MessageEvent) => {
            const data = JSON.parse(event.data)
            if ('response' in data) {
                const response: wsResponse<any> = data.response
                if (response.errors.length !== 0) {
                    const apiErrors = new Set<string>()
                    for (const error: wsError of response.errors) {apiErrors.add(error.code)}
                    props.setApiErrors(apiErrors)
                    return
                }
                switch (response.endpoint) {
                    case 'send_friend_request': break
                    case 'respond_to_friend_request': break
                    case 'withdraw_friend_request': break
                    case 'remove_friend': break
                    case 'get_messages': {
                        const content: wsResponseGetMessages = response.content
                        const outboundFriendships: friendship[] = content.friendships.map(friendshipDeserializer)
                        const inboundFriendships: friendship[] = content.incoming_friendships.map(friendshipDeserializer)
                        props.setOutboundFriendships(outboundFriendships)
                        props.setInboundFriendships(inboundFriendships)
                    }
                    break
                    case 'get_friend_requests': {
                        const content: wsResponseGetFriendRequests = response.content
                        const sentFriendRequests: friendRequest[] = content.sent_friend_requests.map(friendRequestDeserializer)
                        const receivedFriendRequests: friendRequest[] = content.received_friend_requests.map(friendRequestDeserializer)
                        props.setSentFriendRequests(sentFriendRequests)
                        props.setReceivedFriendRequests(receivedFriendRequests)
                    }
                }
            }
            else if ('callback' in data) {
                const callback: wsCallback<any> = data.callback
                switch (callback.type) {
                    case 'received_message': {// TO BE CONTINUED
                    }
                }
            }
            else {
                console.log(data)
                throw Error('Unknown Message Received')
            }
        }
    )
}

const deserializer = (data: string) => {
    const message = JSON.parse(data)
    if ('response' in message) {
        const response = message['response']
        if (!('endpoint' in response)) throw Error('Response without endpoint.')
        switch(response['endpoint']) {
            case ''
        }
        
    }
}
