import React, {useState, FormEvent, ChangeEvent} from 'react'


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

    const handleSumbit = () => {
            loginRequest({
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
