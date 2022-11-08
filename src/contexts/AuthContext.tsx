import React, { useContext, useState, useEffect } from 'react'
import { loginRequest, registerRequest, logoutRequest } from '../api/requests'
import { connectWs } from '../ws_api/connection'

interface authContextProps {
  authenticated: boolean,
  login: (props: loginProps) => {}
}

interface loginProps {
  username: string,
  password: string,
}

export const AuthContext = React.createContext<authContextProps|undefined>(undefined)

interface authProviderProps {
  children: JSX.Element
}

export const AuthProvider: React.FC<authProviderProps> = ({children}: authProviderProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [socket, setSocket] = useState<WebSocket|undefined>()

  const login = async ({username, password}: loginProps) => {
      const status = await loginRequest({username, password})
      if (status) setAuthenticated(true)
      if (socket !== undefined) socket.close()

    await connect()
  }

  const connect = async () => {
    if (socket === undefined || !socket?.OPEN) {
      const sock = connectWs()
      sock.addEventListener(
        'message',
        (event) => {console.log(event.data)}
      )
      setSocket(sock)
    }
  }

  const contextProps: authContextProps = {
    authenticated,
    login
  }

  return (
    <AuthContext.Provider value={contextProps} >
      {children}
    </AuthContext.Provider>
  )
}
