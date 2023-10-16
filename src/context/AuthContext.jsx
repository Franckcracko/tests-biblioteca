import { createContext, useEffect, useState } from 'react'
import { loginRequest, logoutRequest, registerRequest, verifyTokenRequest, verifyEmail, registerTeacherRequest } from '../api/auth'
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

  const register = async (user) => {
    try {
      const res = await registerRequest(user)
      console.log(res.status)
      return res.status === 200
    } catch (error) {
      console.log('No existe o ha ocurrido un problema')
      return false
    }
  }

  const logout = async () => {
    try {
      await logoutRequest(user)
      setUser(null)
      setIsAuthenticated(false)
    } catch (error) {
      console.log(error)
    }
  }

  const sendEspecialAuthRequest = async (user) => {
    try {
      const res = await registerTeacherRequest(user)
      console.log(res)
      return res.status
    } catch (error) {
      console.log(error)
      return error.response.data.message
    }
  }

  const verifyEmailRequest = async (paramID) => {
    return await verifyEmail(paramID)
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
      isLoading,
      register,
      logout,
      sendEspecialAuthRequest,
      verifyEmailRequest
    }}>
      {children}
    </AuthContext.Provider>
  )
}
