import { getCookie } from 'typescript-cookie'

const baseUrl = 'http://127.0.0.1:8000/api/'

interface apiRequestProps {
    endpoint: string,
    csrfToken?: string
    body?: {}
}

const makeApiRequest = async (props: apiRequestProps) => {
    const url = baseUrl + props.endpoint
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRFToken': props.csrfToken === undefined ? '' : props.csrfToken
    }
    const body = props.body === undefined ? '' : JSON.stringify(props.body)

    const response = await fetch(
        url,
        {
            method: 'POST',
            credentials: 'include',
            headers: headers,
            body: body
        },
    )
    return response
}

interface loginProps {
    username: string,
    password: string
}

export const loginRequest = async (props: loginProps): Promise<boolean> => {
    const response = await makeApiRequest({
        endpoint: 'login/',
        body: props
    })
    if (response.ok) {
        const csrfToken = getCookie('csrftoken')
        if (typeof csrfToken === 'string') {
            await getFriendsRequest(csrfToken)
        }
    }
    return response.ok
}

interface registerProps {
    username: string,
    email: string,
    password: string
}

export const registerRequest = async (props: registerProps): Promise<boolean> => {
    const response = await makeApiRequest({
        endpoint: 'register/',
        body: props
    })
    console.log(response)
    return response.ok
}

export const logoutRequest = async (csrfToken: string) => {
    const response = await makeApiRequest({
        endpoint: 'logout/',
        csrfToken: csrfToken,
    })
    console.log(await response.json())
    return response.ok
}

export const getFriendsRequest = async (csrfToken: string) => {
    const response = await makeApiRequest({
        endpoint: 'get-friends/', 
        csrfToken: csrfToken, 
    })
    return [response.ok, await response.json()]
}
