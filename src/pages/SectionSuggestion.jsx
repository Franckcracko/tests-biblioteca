import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export default function SectionSuggestion () {
  return (
    <>
      <header className='flex justify-between p-4'>
        <Link to={'/sugerencias'}> <span>Volver</span></Link>
        <img src="/logo_upalt_sin_fondo.png" alt="imagen upalt" className='w-[82px] object-cover' />
      </header>
      <main className='h-[calc(100vh-200px)] grid place-content-center'>
        <div className='w-full md:p-0 md:w-[450px] grid gap-y-12'>
          <h1 className='text-3xl font-medium text-center'>Tipo de Sugerencia</h1>
          <Link to={'libro'}><Button className='w-full' color='primary' variant='faded' size='lg'>Libro</Button></Link>
          <Link to={'inconformidad'}><Button className='w-full' color='primary' variant='faded' size='lg'>Inconformidad</Button></Link>
        </div>
      </main>
    </>
  )
}
