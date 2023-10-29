import { FormAddBook } from './FormAddBook'
import { FormAddDrag } from './FormAddDrag'

export default function Add () {
  return (
    <>
      <section>
        <FormAddDrag />
      </section>

      <section className='pb-12'>
        <h2 className='text-3xl py-3'>Agregar Libros</h2>
        <p className='mb-2'>En el siguiente formulario podrás agregar libros, solo tienes que rellenar todos los datos solicitados.</p>
        <FormAddBook />
      </section>
    </>
  )
}
