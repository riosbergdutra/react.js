import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [userLogged, setUserLogged] = useState(false)
    const navigate = useNavigate()
    const loginUser = async (inputValues) => {
      const response = await fetch('http://localhost:5000/usuario/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputValues)
    })
    console.log(response)
    navigate('/')
    setUserLogged(true)
    }
  return (
    <AuthContext.Provider value={{userLogged, loginUser}}>
        {children}
    </AuthContext.Provider> 
  )
}   

export  {AuthContext,AuthProvider}