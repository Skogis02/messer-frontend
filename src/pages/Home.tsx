import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { FriendProvider } from '../contexts/FriendContex';
import { FriendList } from '../components/FriendList';
import { Message } from '../components/Message'
import './styles/Home.css'
import { Chat } from '../components/Chat'

const Home: React.FC = () => {

    const [selectedFriend, setSelectedFriend] = useState<string>('')

    const authCont = useContext(AuthContext)
    if (authCont === undefined) return <>AuthContext is undefined</>
    const authenticated = authCont['authenticated']

    
    return (
        <div className='home-pg'>
            <FriendProvider>
                <FriendList/>
                <Chat/>
            </FriendProvider>
        </div>
    )
}

export default Home

