import React, {useState, useContext, ChangeEvent} from 'react'
import { AuthContext } from '../contexts/AuthContext'


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
        <>
            <label>Username: </label>
            <input 
                type='text'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setUsername(e.target.value)
                }}
            />
            <label>Password: </label>
            <input 
                type='password'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }}
            />
            <button onClick={handleSumbit}>
                Login!
            </button>
            <p>{authCont['authenticated'] ? 'logged in' : 'not logged in'}</p>
        </>
    )
}

export default LoginForm
