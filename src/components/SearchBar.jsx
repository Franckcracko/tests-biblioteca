import React, { useEffect, useState } from 'react'
import { SearchIcon } from './Icons'
import { Input } from '@nextui-org/react'

export default function SearchBar ({ getB, setFilters }) {
  const [value, setValue] = useState('')
  useEffect(() => {
    setFilters(prevState => ({
      ...prevState,
      title: value
    }))
  }, [value])

  return (
    <Input
      value={value}
      onValueChange={setValue}
      label="Search"
      isClearable
      radius="lg"
      className='text-primary'
      placeholder="Busca tu Libro..."
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setFilters(prevState => ({
            ...prevState,
            title: value
          }))
        }
      }}
      startContent={
        <button onClick={async () => {
          setFilters(prevState => ({
            ...prevState,
            title: value
          }))
        }}>
          <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        </button>
      }
    />
  )
}
