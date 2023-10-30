import { useAuth } from '../hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import Loading from '../components/Loading'

export const routesAdmin = [
  '/dashboard'
]

export default function ProtectedRoute () {
  const { isAuthenticated, isLoading, user } = useAuth()

  const location = useLocation()

  if (!isLoading) {
    return <Loading />
  }

  if (!isAuthenticated && isLoading) return <Navigate to={'/auth'} replace />

  if (routesAdmin.includes(location.pathname) && user.rol === 'STUDENT') {
    return <Navigate to={'/404'} replace />
  }
  return (<Outlet />)
}
