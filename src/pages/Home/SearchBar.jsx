import { useEffect, useState } from 'react'
import { SearchIcon } from '../../components/Icons'
import { Input } from '@nextui-org/react'
import { useFilter } from '../../hooks/useFilter'

const search = 'title'
export default function SearchBar () {
  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)
  const { updateParams, removeParams } = useFilter()

  useEffect(() => {
    if (!active) { return }

    if (value === '') {
      return removeParams([search])
    }
    updateParams({ value, index: search })
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
        setActive(true)
      }}
      startContent={
        <button onClick={async () => {
          if (value !== '') {
            updateParams({ value, index: search })
          }
        }}>
          <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        </button>
      }
    />
  )
}
