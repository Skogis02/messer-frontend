import React from 'react'

const LoginForm: React.FC = () => {
  return (
    <>
        <label>Username: </label>
        <input type='text'/>
        <label>Password: </label>
        <input type='password'/>
        <button>
            Login!
        </button>
    </>
  )
}

export default LoginForm
