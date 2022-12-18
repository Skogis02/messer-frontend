export interface message {
    fromUser: string,
    toUser: string,
    createdAt: number,
    hasBeenRead: boolean,
    readAt: number|null,
    content: string
}

export interface friendRequest {
    fromUser: string,
    toUser: string,
    createdAt: number,
}

export interface friendship {
    user: string,
    friend: string,
    messages: message[]
}
