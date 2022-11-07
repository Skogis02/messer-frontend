import { allowedNodeEnvironmentFlags } from "process"
import { getCookie } from 'typescript-cookie'

export const GetFriends = async () => {
    const token = getCookie('csrftoken')


    const response = await fetch(
        'http://127.0.0.1:8000/api/get-friends/',
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': token === undefined ? '' : token,
            },
        }
    )
    console.log(await response.json())
}

