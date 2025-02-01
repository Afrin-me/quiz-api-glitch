import React from 'react'
import { useNavigate } from 'react-router-dom'



export const AuthContext = createContext()
const AuthContextProvider=({children})=> {
 
const[authenticated, setAuthenticated] = useState()
const[token,setToken] = useState(null)

const navigate= useNavigate()

useEffect(()=>{
    console.log(token)
},[token])
  return (
    <div>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    </div>
  )
}

export default AuthContextProvider