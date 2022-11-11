import React, {useState, useContext, ChangeEvent} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import './styles/LoginForm.css'


interface loginProps {
    username: string,
    password: string
}

interface Props {
    loginRequest: (props: loginProps) => Promise<boolean>
}

const LoginForm: React.FC<Props> = ({loginRequest}: Props) => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const authCont = useContext(AuthContext)
    if (authCont === undefined) return <>AuthContext is undefined</>
    const login = authCont['login']

    const handleSumbit = () => {
            login({
                username: username,
                password: password
            })

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
