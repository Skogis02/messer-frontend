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
