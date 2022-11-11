import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';


const App: React.FC = () => {

    return (
        <div className='app'>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login login={true}/>}/>
                    <Route path='/register' element={<Login login={false}/>}/>
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App;
