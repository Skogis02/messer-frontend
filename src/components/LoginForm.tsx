import React, {useState, useContext, ChangeEvent} from 'react'
import { loginRequest } from '../api/requests'
import { useAuthContext } from '../contexts/AuthContext'
import './styles/LoginForm.css'

interface loginProps {
    username: string,
    password: string
}

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const authContext = useAuthContext()

    const handleSumbit = async () => {
        const status = await loginRequest({
            username: username,
            password: password
        })
        if (status) {
            authContext.setAuthenticated(true)
        }
    }

    return (
        <div className='login-form'>
            <div className='labeled-input'>
                <label className='univ-label'>Username: </label>
                <input 
                    className = 'univ-input'
                    type='text'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value)
                    }}
                />
            </div>
            <div className='labeled-input'>  
                <label className='univ-label'>Password: </label>
                <input 
                    className='univ-input'
                    type='password'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value)
                    }}
                />
            </div>
            <button
            className='univ-button'
            onClick={handleSumbit}
            >
                Login!
            </button>
        </div>
    )
}

export default LoginForm
