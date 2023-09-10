import { StructureBase } from './StructureBase'
import { FormBook } from './formBook'

export function Dashboard () {
  return (
    <StructureBase>
      <h1 className='text-6xl text-primary font-medium py-6'>Dashboard</h1>
      <article>
        <h2 className='text-3xl py-3'>Agregar Libros</h2>
        <p className='mb-2'>En el siguiente formulario podrás agregar libros, solo tienes que rellenar todos los datos solicitados.</p>
        <FormBook />
      </article>
    </StructureBase>
  )
}
