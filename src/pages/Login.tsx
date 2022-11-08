import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm';
import { loginRequest, registerRequest } from '../api/requests'

interface Props {
    login: boolean
}

const Login: React.FC<Props> = ({login=true}: Props) => {

    return (
        login ? 
        <>
            <h3>
                Login
            </h3>
            <LoginForm loginRequest={loginRequest}/>
            <div>
                Don't have an account? <Link to='/register'> Register! </Link>
            </div> 
        </>
        :
        <>
            <h3>
                Register
            </h3>
            <RegisterForm registerRequest={registerRequest}/>
            <div>
                Already have an account? <Link to='/login'> Login! </Link>
            </div>
        </>
    )
}

export default Login