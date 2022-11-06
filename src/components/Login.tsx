import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    login: boolean
}

const Login: React.FC<Props> = ({login=true}: Props) => {

    const mode: string = login ? 'Login' : 'Register';

    return (
        <>
            <h3>{mode}</h3>
            <form>
                <label>Username: </label>
                <input/>
                { login ? null : <label>Email: </label>}
                { login ? null : <input/>}
                <label>Password: </label>
                <input/>
                { login ? null : <label>Confirm Password: </label>}
                { login ? null : <input/>}
                { login ? 
                    <input type='submit' value='Login'/>
                    :
                    <input type='submit' value='Register'/> 
                }       
            </form>
            { 
                login ? 
                <div>
                    Don't have an account? <Link to='/register'> Register! </Link>
                </div> 
                :
                <div>
                    Already have an account? <Link to='/login'> Login! </Link>
                </div>
            }
        </>
    )
}

export default Login