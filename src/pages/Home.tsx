import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { FriendList } from '../components/FriendList';
import { Message } from '../components/Message'
import './styles/Home.css'
import { Chat, messageProps } from '../components/Chat'

const sentMessages: messageProps[] = [
    {
        fromUser: 'kalle',
        content: 'skicka 3',
        createdAt: 3
    },
    {
        fromUser: 'kalle',
        content: 'skicka 2',
        createdAt: 2
    },
    {
        fromUser: 'kalle',
        content: 'skicka 1',
        createdAt: 1
    }
]

const receivedMessages: messageProps[] = [
    {
        fromUser: 'per',
        content: 'per 2',
        createdAt: 2
    },
    {
        fromUser: 'per',
        content: 'per 3',
        createdAt: 3
    },
    {
        fromUser: 'martin',
        content: 'tjenare',
        createdAt: 1
    }
]

const Home: React.FC = () => {
    const authCont = useContext(AuthContext)
    if (authCont === undefined) return <>AuthContext is undefined</>
    const authenticated = authCont['authenticated']
    
    return (
        <div className='home-pg'>
            <FriendList/>
            <Chat friend='per' sentMessages={sentMessages} receivedMessages={receivedMessages}/>
        </div>
    )
}

export default Home

