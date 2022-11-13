import React, {useState, ChangeEvent} from 'react'
import { registerRequest, loginRequest } from '../api/requests'
import { connectWs } from '../ws_api/connection'
import { useAuthContext } from '../contexts/AuthContext' 

interface registerProps {
    username: string,
    email: string,
    password: string
}

const RegisterForm: React.FC = () => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmedPassword, setConfirmedPassword] = useState<string>('')

    const authContext = useAuthContext()

    const handleSubmit = async () => {
        if (password !== confirmedPassword) {
            return
        }
        console.log('', username, email, password)
        const status = await registerRequest({
            username: username,
            email: email,
            password: password
        })
        if (status) {
            const loginStatus = await loginRequest({
                username: username,
                password: password
            })
            console.log(loginStatus)
            if (loginStatus) {
                const socket = connectWs()
                authContext.setSocket(socket)
                authContext.setAuthenticated(true)
            }
        }

    }

    return (
        <div className='login-form'>
            <div className='labeled-input'>
                <label>Username: </label>
                <input 
                    className='univ-input'
                    type='text'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value)
                    }}
                />
            </div>
            <div className='labeled-input'>
                <label>Email: </label>
                <input 
                    className='univ-input'
                    type='text'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value)
                    }}
                />
            </div>
            <div className='labeled-input'>
                <label>Password: </label>
                <input 
                    className='univ-input'
                    type='password'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value)
                    }}
                />
            </div>
            <div className='labeled-input'>
                <label>Confirm Password: </label>
                <input 
                    className='univ-input'
                    type='password'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setConfirmedPassword(e.target.value)
                    }}
                />
            </div>
            <button
            className='univ-button'
            onClick={handleSubmit}>
                Register!
            </button>
        </div>
    )
}

export default RegisterForm
