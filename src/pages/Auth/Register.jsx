import { Button, Card, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
export function Register ({ setLogin, register }) {
  const {
    register: registerHook,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm()

  const onSubmit = async (user) => {
    const userCreated = await register(user)
    setLogin(userCreated)
  }
  return (
    <div className='md:w-[500px]'>
      <Card className="max-md:shadow-none p-8">
        <h1 className='text-primary text-6xl my-6'>Registro</h1>
        <p className='opacity-60 text-sm mb-2'>Para iniciar sesión tienes que registrarte con tu token que se obtiene en el SIUN.</p>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 grid '>
          {
            errors.token &&
            (
              <p className='mb-2 bg-red-600 text-white p-2 rounded '>Campo Incompleto necesito el Token</p>
            )
          }
          <Input {...registerHook('token', { required: true })} className='mb-4' color='primary' variant='bordered' label='Token' isClearable labelPlacement='inside' type="text" />
          <Button type='submit' color='primary' size='lg'>
            Registrar
          </Button>
        </form>
        <div className='my-2'>
          <p className='mb-2'>
            Ya estas registrado?
            <button onClick={() => setLogin(true)} className='text-primary hover:text-primary/80 underline transition-opacity ml-2'>Inicia Sesión</button>
          </p>
          <Link to={'/registro-especial'} className='text-primary underline hover:text-primary/80'>
            Registrarse como Maestro
          </Link>
        </div>
      </Card>
    </div>
  )
}
