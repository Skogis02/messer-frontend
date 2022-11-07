interface loginProps {
    username: string,
    password: string
}

export const LoginRequest = async ({username, password}: loginProps) => {
    const response = await fetch(
        'http://127.0.0.1:8000/api/login/',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'username': username,
                    'password': password,
                })
            }
        )
    console.log(response)
}

interface registerProps {
    username: string,
    email: string,
    password: string
}

export const RegisterRequest = async ({username, email, password}: registerProps) => {
    return
}