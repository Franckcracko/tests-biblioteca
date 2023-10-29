import { Input } from '@nextui-org/react'
import { Link, Navigate, useParams } from 'react-router-dom'

export default function TypeSuggestion () {
  const { type } = useParams()

  if (type !== 'inconformidad' && type !== 'libro') {
    return <Navigate to={'/404'} replace />
  }

  if (type === 'inconformidad') {
    return (
      <div className="container">
        Inconforme
      </div>
    )
  }

  if (type === 'libro') {
    return (
      <>
        <header className='flex justify-between p-4'>
          <Link to={'/sugerencias/sugerencia'}> <span>Volver</span></Link>
          <img src="/logo_upalt_sin_fondo.png" alt="imagen upalt" className='w-[82px] object-cover' />
        </header>
        <main className='p-6'>
          <form className='grid gap-y-4 px-2 md:px-24'>
            <Input labelPlacement='inside' variant='underlined' label={'Titulo'} />
            <Input labelPlacement='inside' variant='underlined' label={'Autor'} />
            <Input labelPlacement='inside' variant='underlined' label={'ISBN'} />
            <Input labelPlacement='inside' variant='underlined' label={'Link PDF (OPCIONAL)'} />
          </form>
        </main>
      </>
    )
  }
}
