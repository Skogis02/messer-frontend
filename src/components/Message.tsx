import React, { PropsWithChildren } from 'react'
import './styles/Message.css'

export interface messageComponentProps extends PropsWithChildren {}

export const Message: React.FC<messageComponentProps> = ({children}: messageComponentProps) => {

  return (
    <div className='message'>
        {children}
    </div>
  )
}
