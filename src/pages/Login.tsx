import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import './styles/Login.css'

interface loginPageProps {
    login: boolean
}

const Login: React.FC<loginPageProps> = ({login=true}: loginPageProps) => {

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