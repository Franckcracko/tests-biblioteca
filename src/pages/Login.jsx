import { Button, Card, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login () {
  const navigate = useNavigate()
  const { auth, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm()

  const onSubmit = (user) => {
    auth(user)
  }
  return (
    <main className="md:grid mt-16 justify-center items-center md:mt-0 md:h-[calc(100vh-100px)]">
      <div className='md:w-[500px]'>
        <Card className="max-md:shadow-none p-8">
          <h1 className='text-primary text-6xl my-6'>Iniciar Sesión</h1>
          <span className='opacity-60 text-sm mb-2'>Para iniciar sesión tienes que tener un token que se obtiene en el SIUN.</span>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-4 grid '>
            {
              errors.token &&
              (
                <p className='mb-2 bg-red-600 text-white p-2 rounded '>Campo Incompleto necesito el Token</p>
              )
            }
            <Input {...register('token', { required: true })} className='mb-4' color='primary' variant='bordered' label='Token' isClearable labelPlacement='inside' type="text" />
            <Button type='submit' color='primary' size='lg'>
              Entrar
            </Button>
          </form>
        </Card>
      </div>
    </main>
  )
}
