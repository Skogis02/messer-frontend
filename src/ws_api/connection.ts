const URL = 'ws://127.0.0.1:8000/ws/ws-api/'

export const connectWs = (): WebSocket => {
    const socket = new WebSocket(URL)
    return socket
}

interface sendMesssageProps {
    socket: WebSocket,
    endpoint: string,
    content: {}
}

export const sendMessage = (props: sendMesssageProps) => {
    const message = JSON.stringify({
        endpoint: props.endpoint,
        content: props.content
    })
    props.socket.send(message)
}

interface eventDataProps {
    type: string,
    content: {}
}

interface eventRouterProps {
    endpoints: (({type, content}: eventDataProps) => void)[]
}

export const eventRouter = ({endpoints}: eventRouterProps) => {}

eventRouter({
    endpoints: [({type, content}: eventDataProps) => {}]
})