import { useAuth } from '../../../hooks/useAuth'
import { Button } from '@nextui-org/react'
import { TableSuggests } from './TableSuggests'
import { keywordPages } from '../../../config'
import { useEffect, useState } from 'react'
import { getSuggests } from '../../../api/suggests'

const TYPES_STATUS_SUGGEST = {
  PENDING: 'PENDIENTE',
  APPROVED: 'APROBADO',
  DECLINE: 'RECHAZADO'
}
export default function Home ({ setRoute }) {
  const { user } = useAuth()

  const [suggests, setSuggests] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSuggests()
        const data = res.data.data
        console.log(data)
        setSuggests(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div id="home" className='gap-6'>
      <section className="[grid-area:welcome] bg-secondary/20 p-4 rounded-xl shadow-sm">
        <h1 className='text-4xl text-primary font-medium mb-2'>Hola ADMIN!</h1>
        <p className='text-black text-lg mb-6'>{user.email}</p>
        <Button onClick={() => setRoute(keywordPages.ADD_PAGE.path)} className='lg:w-[200px]' size='md' color='primary' variant='shadow'>
          Agrega un Nuevo Libro!
        </Button>
      </section>

      <section className="[grid-area:suggest] p-10 bg-gray-100 rounded-xl min-w-[300px] ">
        <h2 className='font-medium text-2xl text-center'>Sugerencias</h2>
        <span className='grid justify-center text-center text-lg'><strong className='text-4xl text-green-500'>{suggests.filter(suggest => suggest.status === TYPES_STATUS_SUGGEST.APPROVED).length} / {suggests.length}</strong>Completadas</span>
      </section>

      <section className="[grid-area:table]">
        <h2 className='text-xl font-medium pb-2'>Tabla de Sugerencias</h2>
        <TableSuggests suggests={suggests} />
      </section>

      <section className="[grid-area:requests]">

      </section>
      <div className='flex flex-wrap'>

      </div>

    </div>
  )
}
