import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext';
import { FriendProvider } from '../contexts/FriendContex';
import { FriendList } from '../components/FriendList';
import './styles/Home.css'
import { Chat } from '../components/Chat'

const Home: React.FC = () => {
    const [selectedFriend, setSelectedFriend] = useState<string>('')

    const authContext = useAuthContext()
    if (!authContext.authenticated) return <Navigate to='/login'/>

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

