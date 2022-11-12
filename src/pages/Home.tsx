import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { FriendProvider } from '../contexts/FriendContex';
import { FriendList } from '../components/FriendList';
import { Message } from '../components/Message'
import './styles/Home.css'
import { Chat, messageProps } from '../components/Chat'

const sentMessages: messageProps[] = [
    {
        fromUser: 'kalle',
        content: 'skicka 1',
        createdAt: 1
    },
    {
        fromUser: 'kalle',
        content: 'skicka 2',
        createdAt: 2
    },
    {
        fromUser: 'kalle',
        content: 'skicka 3',
        createdAt: 3
    }
]

const receivedMessages: messageProps[] = [
    {
        fromUser: 'per',
        content: 'per 1',
        createdAt: 1
    },
    {
        fromUser: 'per',
        content: 'per 2',
        createdAt: 4
    },
    {
        fromUser: 'martin',
        content: 'tjenare',
        createdAt: 3
    }
]

const friends = ['per', 'martin', 'jacob']



const Home: React.FC = () => {

    const [selectedFriend, setSelectedFriend] = useState<string>('')

    const authCont = useContext(AuthContext)
    if (authCont === undefined) return <>AuthContext is undefined</>
    const authenticated = authCont['authenticated']

    
    return (
        <div className='home-pg'>
            <FriendProvider>
                <FriendList
                friends={friends} 
                selectedFriend={selectedFriend}
                setSelectedFriend={setSelectedFriend}
                />
                <Chat friend='per' sentMessages={sentMessages} receivedMessages={receivedMessages}/>
            </FriendProvider>
        </div>
    )
}

export default Home

