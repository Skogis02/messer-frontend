import React, {useState, ChangeEvent} from 'react'

interface registerProps {
    username: string,
    email: string,
    password: string
}

interface Props {
    registerRequest: (data: registerProps) => {}
}

const RegisterForm: React.FC<Props> = ({registerRequest}: Props) => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmedPassword, setConfirmedPassword] = useState<string>('')

    const handleSubmit = () => {
        if (password === confirmedPassword) {
            registerRequest({
                username: username,
                email: email,
                password: password
            })
        }
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
            <label>Email: </label>
            <input 
                type='text'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                }}
            />
            <label>Password: </label>
            <input 
                type='password'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }}
            />
            <label>Confirm Password: </label>
            <input 
                type='password'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setConfirmedPassword(e.target.value)
                }}
            />
            <button onClick={handleSubmit}>
                Register!
            </button>
        </>
    )
}

export default RegisterForm
