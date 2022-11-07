import React, {useState, FormEvent, ChangeEvent} from 'react'

interface RegistrationData {
    username: string,
    email: string,
    password: string
}

interface Props {
    RegisterRequest: (data: RegistrationData) => {}
}

const RegisterForm: React.FC<Props> = ({RegisterRequest}: Props) => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmedPassword, setConfirmedPassword] = useState<string>('')



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
                    setEmail(e.target.value)
                }}
            />
            <button onClick={() => {console.log(username)}}>
                Register!
            </button>
        </>
    )
}

export default RegisterForm
