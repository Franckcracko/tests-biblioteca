import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Suggestions } from './pages/Suggestions'
import { Login } from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './pages/ProtectedRoute'
import Book from './pages/Book'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

export default function App () {
  return (
    <BrowserRouter basename='/'>
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/book/:id' element={<Book />} />
            <Route path='/sugerencias' element={<Suggestions />} />
            <Route path='/perfil' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
