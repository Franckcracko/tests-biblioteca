import { createContext, useEffect, useState } from 'react'
import { loginRequest, verifyTokenRequest } from '../api/auth'
import Cookies from 'js-cookie'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const auth = async (user) => {
    try {
      const res = await loginRequest(user)

      setUser({
        ...res.data._doc,
        rol: res.data.rol
      })

      setIsLoading(true)
      setIsAuthenticated(true)
    } catch (error) {
      console.log('No se Pudo loguear')
      setUser(null)
      setIsLoading(true)
      setIsAuthenticated(false)
    }
  }

  useEffect(() => {
    async function checkLogin () {
      const cookies = Cookies.get()

      if (!cookies.token) {
        setIsAuthenticated(false)
        setUser(null)
        setIsLoading(true)
        return
      }

      try {
        const res = await verifyTokenRequest(cookies.token)

        if (!res.data) return setIsAuthenticated(false)

        setUser({
          ...res.data._doc,
          rol: res.data.rol
        })
        setIsAuthenticated(true)
        setIsLoading(true)
      } catch (error) {
        setIsAuthenticated(false)
        setUser(null)
        setIsLoading(true)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      auth,
      isAuthenticated,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}
