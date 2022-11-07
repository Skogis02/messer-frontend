import React, {useState, FormEvent, ChangeEvent} from 'react'

interface LoginData {
    username: string,
    password: string
}

interface Props {
    LoginRequest: (data: LoginData) => {}
}

const LoginForm: React.FC<Props> = ({LoginRequest}: Props) => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSumbit = () => {
            LoginRequest({
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
        </>
    )
}

export default LoginForm
