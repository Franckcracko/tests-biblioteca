import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Dashboard } from './components/Dashboard'
import { Suggestions } from './components/Suggestions'

export default function App () {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sugerencias' element={<Suggestions />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="*" element={<>404</>}/>
      </Routes>
    </BrowserRouter>
  )
}
