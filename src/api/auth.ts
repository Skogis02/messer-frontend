interface loginProps {
    username: string,
    password: string
}

export const LoginRequest = async ({username, password}: loginProps) => {
    return await fetch(
        '/api/login',
            {
                method: 'POST',
                body: JSON.stringify({
                    'username': username,
                    'password': password,
                })
            }
        )
}
