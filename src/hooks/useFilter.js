import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export const useFilter = () => {
  const context = useContext(FilterContext)

  if (!context) {
    throw new Error('UseFilter no esta en el Scope')
  }
  return context
}
