import { motion } from 'framer-motion'

export default function Loading () {
  return (
    <div className='w-full grid justify-center items-center mt-32'>
      <img className='h-[200px] w-[300px] object-cover' src="/logo_upalt_sin_fondo.png" alt="logo upalt" />
      <motion.p
        className='text-4xl text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >Cargando...</motion.p>
    </div>
  )
}
