import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function EspecialRegister () {
  const { sendEspecialAuthRequest } = useAuth()

  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  const onSubmit = async (user) => {
    const response = await sendEspecialAuthRequest(user)
    const success = response === 200
    alert(success ? 'Enviado a el Administrador para verificar.' : 'Error, intente mas tarde.')
    reset()
  }

  return (
    <main className="md:grid mt-16 justify-center items-center md:mt-0 md:h-[calc(100vh-100px)]">
      <div className='md:w-[500px] py-12'>
        <h1 className='text-primary text-6xl my-6 text-center'>Registro de docentes</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 grid '>
          <Input {...register('name', { required: true })} className='mb-4' color='primary' variant='bordered' label='Nombre' labelPlacement='inside' type="text" />
          <Input {...register('username', { required: true })} className='mb-4' color='primary' variant='bordered' label='Username' labelPlacement='inside' type="text" />
          <Input {...register('email', { required: true })} className='mb-4' color='primary' variant='bordered' label='Email' labelPlacement='inside' type="email" />
          <Input {...register('password', { required: true })} className='mb-4' color='primary' variant='bordered' label='Contraseña' isClearable labelPlacement='inside' type="password" />
          <Input {...register('class', { required: true })} className='mb-4' color='primary' variant='bordered' label='Cargo' labelPlacement='inside' type="text" />
          <Button type='submit' color='primary' size='lg'>
            Registrar
          </Button>
        </form>
        <div className='my-2'>
          <Link to={'/auth'} className='text-primary underline hover:text-primary/80'>
            Deseas regresar al inicio?
          </Link>
        </div>
      </div>
    </main>
  )
}
