// Handler Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Providers
import { AuthProvider } from './context/AuthContext'
import { FilterProvider } from './context/FilterContext'

// Pages
import { Suggestions } from './pages/Suggestion/Suggestions'
import Home from './pages/Home/page'
import Dashboard from './pages/Dashboard/page'
import Auth from './pages/Auth/page'
import ProtectedRoute from './pages/ProtectedRoute'
import Book from './pages/Book/page'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/404/page'
import SectionSuggestion from './pages/Suggestion/SectionSuggestion'
import TypeSuggestion from './pages/Suggestion/TypeSuggestion'
import EspecialRegister from './pages/Auth/EspecialRegister'
import Verify from './pages/Verify'

export default function App () {
  return (
    <BrowserRouter basename='/'>
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route
              path='/'
              element={
                <FilterProvider>
                  <Home />
                </FilterProvider>
              }
            />
            <Route path='/book/:id' element={<Book />} />
            <Route path='/sugerencias' element={<Suggestions />} />
            <Route path='/sugerencias/sugerencia' element={<SectionSuggestion />} />
            <Route path='/sugerencias/sugerencia/:type' element={<TypeSuggestion />} />
            <Route path='/perfil' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>

          <Route path='/verify' element={<Verify />} />
          <Route path='/registro-especial' element={<EspecialRegister />} />
          <Route path='/auth' element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
