import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Home: React.FC = () => {
    const authCont = useContext(AuthContext)
    if (authCont === undefined) return <>AuthContext is undefined</>
    const authenticated = authCont['authenticated']
    
    return (
        <>
        Home!

        {authenticated ? <p>Authenticated!</p> : <p> Not Authenticated </p>}
        </>
    )
}

export default Home