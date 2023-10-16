import { createContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getBooks } from '../api/books'

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [params, setParams] = useSearchParams()

  const paramsToObject = (searchParams) => {
    const params = {}
    for (const [key, value] of searchParams.entries()) {
      params[key] = value
    }
    return params
  }

  const filterUpload = async ({ setBooks, params }) => {
    const data = await getBooks(params)
    const dataBooks = data.data.books

    setBooks(dataBooks)
  }

  const updateParams = ({ value, index }) => {
    setParams(() => {
      const objectParams = paramsToObject(params)

      return { ...objectParams, [index]: value }
    })
  }

  const clearParams = () => {
    setParams({})
  }

  const removeParams = (keys) => {
    setParams(prevState => {
      const objectParams = paramsToObject(prevState)

      const newState = {}

      for (const key in objectParams) {
        if (keys.findIndex(search => search === key) === -1) {
          newState[key] = objectParams[key]
        }
      }
      console.log(keys)
      console.log(newState)
      return newState
    })
  }

  useEffect(() => {
    filterUpload({ setBooks, params: params.toString() })
  }, [params])

  return (
    <FilterContext.Provider value={{
      books,
      removeParams,
      clearParams,
      setParams,
      params,
      filterUpload,
      updateParams,
      paramsToObject
    }}>
      {children}
    </FilterContext.Provider>
  )
}
