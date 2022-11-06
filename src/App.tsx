import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';


const App: React.FC = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login login={true}/>}/>
                <Route path='/register' element={<Login login={false}/>}/>
            </Routes>
        </>
    )
}

export default App;
