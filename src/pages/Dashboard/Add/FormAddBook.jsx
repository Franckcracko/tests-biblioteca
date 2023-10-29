import { Button, Input } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

const inputs = [
  {
    label: 'Carrera',
    id: 'Carrera',
    type: 'text',
    required: true
  },
  {
    label: 'Plan de Estudios',
    id: 'Plan de Estudios',
    type: 'text',
    required: true
  },
  {
    label: 'Materia',
    id: 'Materia',
    type: 'text',
    required: true
  },
  {
    label: 'Portada Imagen',
    id: 'Portada Imagen',
    type: 'text',
    required: true
  },
  {
    label: 'Palabras Clave',
    id: 'Palabras Clave',
    type: 'text'
  },
  {
    label: 'Titulo',
    id: 'Titulo',
    type: 'text',
    required: true
  },
  {
    label: 'Descripcion',
    id: 'Descripcion',
    type: 'text',
    required: true
  },
  {
    label: 'Autor',
    id: 'Autor',
    type: 'text',
    required: true
  },
  {
    label: 'ISBN',
    id: 'ISBN(OPCIONAL)',
    type: 'text'
  },
  {
    label: 'Editorial',
    id: 'Editorial',
    type: 'text',
    required: true
  },
  {
    label: 'Año Publicacion',
    id: 'Año Publicacion',
    type: 'text',
    required: true
  },
  {
    label: 'Existencia Fisica',
    id: 'Existencia Fisica',
    type: 'text',
    required: true
  },
  {
    label: 'Publicado En',
    id: 'Publicado En',
    type: 'text',
    required: true
  },
  {
    label: 'APA',
    id: 'APA(OPCIONAL)',
    type: 'text'
  },
  {
    label: 'Observaciones',
    id: 'Observaciones(OPCIONAL)',
    type: 'text'
  },
  {
    label: 'Link WEB',
    id: 'linLink WEB(OPCIONAL)',
    type: 'text'
  },
  {
    label: 'Link VIDEO',
    id: 'Link VIDEO(OPCIONAL)',
    type: 'text'
  }
]

export const FormAddBook = () => {
  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (book) => {
    console.log(book)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-4 grid '>
      {
        inputs.map(input =>
          <InputBook
            key={input.id}
            register={register}
            label={input.label}
            id={input.id}
            required={input.required ?? false}
          />
        )
      }
      <Button type='submit' color='primary' size='lg'>
        Subir
      </Button>
    </form>
  )
}

function InputBook ({ register, props, type = 'text', label, required = false, id }) {
  return (
    <Input
      {...register(id, { required })}
      className='mb-4'
      isRequired={required}
      color='primary'
      variant='bordered'
      label={label}
      labelPlacement='inside'
      type={type}
      {...props}
    />

  )
}
