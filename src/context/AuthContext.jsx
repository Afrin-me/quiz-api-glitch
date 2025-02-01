import React from 'react'



export const AuthContext = createContext()
const AuthContextProvider=({children})=> {
 

  return (
    <div>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    </div>
  )
}

export default AuthContextProvider