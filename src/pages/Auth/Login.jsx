import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

export const Login = ({ login, setLogin }) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm()

  const onSubmit = (user) => {
    login(user)
  }

  return (
    <div className='md:w-[500px]'>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4 grid '>
        {
          errors.username &&
          <p className='mb-2 bg-red-600 text-white p-2 rounded '>Nombre de Usuario Requerido</p>
        }
        <Input {...register('username', { required: true })} className='mb-4' color='primary' variant='bordered' label='Nombre de Usuario' isClearable labelPlacement='inside' type="text" />

        {
          errors.password &&
          <p className='mb-2 bg-red-600 text-white p-2 rounded '>Contraseña Requerida</p>
        }
        <Input {...register('password', { required: true })} className='mb-4' color='primary' variant='bordered' label='Contraseña' isClearable labelPlacement='inside' type="password" />

        <Button type='submit' color='primary' size='lg'>
          Entrar
        </Button>
      </form>
      <div className='my-2'>
        <span >
          No te has registrado?
          <button onClick={() => setLogin(false)} className='text-primary hover:text-primary/80 underline transition-opacity ml-2'>Registrate</button>
        </span>
      </div>
    </div>
  )
}
