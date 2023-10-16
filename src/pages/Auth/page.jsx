import { Register } from './Register'
import { Login } from './Login'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Auth () {
  const { auth, register, isAuthenticated } = useAuth()
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  return (
    <main className="md:grid mt-16 justify-center items-center md:mt-0 md:h-[calc(100vh-100px)]">
      {
        login
          ? <Login setLogin={setLogin} login={auth} />
          : <Register setLogin={setLogin} register={register} />
      }
    </main>
  )
}
