import React, { useContext, useState, useEffect, PropsWithChildren } from 'react'

interface authContextProps {
  authenticated: boolean,
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
  useSocket: () => WebSocket,
  setSocket: React.Dispatch<React.SetStateAction<WebSocket|undefined>>,
}

interface loginProps {
  username: string,
  password: string,
}

const AuthContext = React.createContext<authContextProps|undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('AuthContext is not defined')
  }
  return context
}

interface authProviderProps extends PropsWithChildren {}


export const AuthProvider: React.FC<authProviderProps> = ({children}: authProviderProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [socket, setSocket] = useState<WebSocket|undefined>()

  const useSocket = () => {
    if (socket === undefined) {
      throw new Error('socket is undefined!')
    }
    return socket
  }

  const context: authContextProps = {
    authenticated: authenticated,
    setAuthenticated: setAuthenticated,
    useSocket: useSocket,
    setSocket: setSocket
  }

  return (
    <AuthContext.Provider value={context} >
      {children}
    </AuthContext.Provider>
  )
}
