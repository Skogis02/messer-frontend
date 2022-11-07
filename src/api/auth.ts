import { GetFriends } from './utils'

interface loginProps {
    username: string,
    password: string
}

export const LoginRequest = async ({username, password}: loginProps) => {
    const response = await fetch(
        'http://127.0.0.1:8000/api/login/',
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive'
                },
                body: JSON.stringify({
                    'username': username,
                    'password': password,
                })
            }
        )
    console.log(await response.json())
    console.log(document.cookie)
    response.headers.forEach(console.log)

    GetFriends()
}

interface registerProps {
    username: string,
    email: string,
    password: string
}

export const RegisterRequest = async ({username, email, password}: registerProps) => {
    return
}