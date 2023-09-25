import { Image } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <main className='grid h-[calc(100vh-300px)] place-content-center'>
      <div className='text-center'>
        <Image isBlurred className='object-cover w-[300px] md:w-[400px]' src="/logo_upalt_sin_fondo.png" alt="imagen logo" />
        <h1 className='text-5xl mb-4 font-semibold'>Upps..</h1>
        <h2 className='text-xl'>Parece que te equivocaste.<p className='text-primary underline transition-colors hover:text-opacity-60'><Link to="/">Vuelve al inicio.</Link></p></h2>
      </div>
    </main>
  )
}
