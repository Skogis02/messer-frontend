import React from 'react'

export default function RegisterForm() {
  return (
    <>
        <label>Username: </label>
        <input type='text'/>
        <label>Email: </label>
        <input type='text'/>
        <label>Password: </label>
        <input type='password'/>
        <label>Confirm Password: </label>
        <input type='password'/>
        <button>
            Register!
        </button>
    </>
  )
}
