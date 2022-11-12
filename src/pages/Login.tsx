import React from 'react'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useAuthContext } from '../contexts/AuthContext'
import './styles/Login.css'

interface loginPageProps {
    login: boolean
}

const Login: React.FC<loginPageProps> = ({login=true}: loginPageProps) => {

    const authContext = useAuthContext()
    if (authContext.authenticated) return <Navigate to='/'/>

    return (
        login ? 
        <div className='login-pg'>
            <div className='card'>
                <h3>
                    Login
                </h3>
                <LoginForm/>
                <div className='change-site'>
                    <p>Don't have an account? <Link to='/register'> Register! </Link></p>
                </div>
            </div> 
        </div>
        :
        <div className='login-pg'>
            <div className='card'>
                <h3>
                    Register
                </h3>
                <RegisterForm/>
                <div className='change-site'>
                    <p>Already have an account? <Link to='/login'> Login! </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login