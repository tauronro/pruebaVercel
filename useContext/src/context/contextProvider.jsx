import React, { useState } from 'react'

export const context = React.createContext({})

const ContextProvider = ({children}) => {
  
  const [saludo, setSaludo] = useState('Hola Nieto')

    return (
    <context.Provider value={{saludo,setSaludo}}>
        {children}
    </context.Provider>
  )
}

export default ContextProvider