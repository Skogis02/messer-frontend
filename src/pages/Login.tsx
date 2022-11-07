import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm';
import { LoginRequest, RegisterRequest } from '../api/auth'

interface Props {
    login: boolean
}

const Login: React.FC<Props> = ({login=true}: Props) => {

    const mode: string = login ? 'Login' : 'Register';

    return (
        login ? 
        <>
            <h3>
                Login
            </h3>
            <LoginForm LoginRequest={LoginRequest}/>
            <div>
                Don't have an account? <Link to='/register'> Register! </Link>
            </div> 
        </>
        :
        <>
            <h3>
                Register
            </h3>
            <RegisterForm RegisterRequest={RegisterRequest}/>
            <div>
                Already have an account? <Link to='/login'> Login! </Link>
            </div>
        </>
    )
}

export default Login