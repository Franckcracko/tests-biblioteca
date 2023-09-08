import './App.css'
import { useEffect, useState } from 'react'
import { db } from './services/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { Button, Chip, Input, Select, SelectItem } from '@nextui-org/react'

export default function App () {
  const [data, setData] = useState([])
  const [categorias, setCategorias] = useState([])
  const getData = async () => {
    const libros = collection(db, 'carreras')
    try {
      const q = query(libros, where('nombre', '==', 'INGENIERIA EN TECNOLOGIAS DE LA INFORMACION'))
      const querySnapshot = await getDocs(q)
      const data = querySnapshot.docs.map(doc => doc.data())
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const {
    register,
    handleSubmit,
    watch,
    resetField
  } = useForm()
  const onSubmit = (data) => console.log(data)

  const handleClose = (indexRemove) => {
    setCategorias(categorias.filter((categoria, index) => index !== indexRemove))
  }

  const planStudiosData = watch('career') !== undefined
    ? data[data.findIndex(value => value.nombre === watch('career'))].planEstudios
    : []
  const materiaData = watch('plan_estudios') !== undefined
    ? data.find(value => value.nombre === watch('career'))
      .planEstudios.find(value => value.title === watch('plan_estudios'))
      .materias.map((materia, index) => ({ materia, id: index }))
    : []
  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          {
            data.length > 0 &&
            (
              <div className='grid'>
                <Select
                  {...register('career')}
                  defaultValue={''}
                  items={data}
                  label="Carrera"
                  placeholder="Selecciona una carrera"
                  className="max-w-xs"
                >
                  {(data) => {
                    return <SelectItem key={data.nombre} textValue={data.nombre}>{data.nombre}</SelectItem>
                  }}
                </Select>
                {
                  planStudiosData.length > 0 &&
                  <Select
                    {...register('plan_estudios')}
                    onSelectionChange={(keys) => {
                      resetField('materia')
                      console.log(keys)
                      console.log(materiaData.length)
                    }}
                    items={planStudiosData}
                    label="Plan de Estudios"
                    placeholder="Selecciona un plan de estudios"
                    className="max-w-xs"
                  >
                    {(data) => {
                      return <SelectItem key={data.title} textValue={data.title}>{data.title}</SelectItem>
                    }}
                  </Select>
                }
                {
                  materiaData.length > 0 && <Select
                    {...register('materia')}
                    items={materiaData}
                    label="Plan de Estudios"
                    placeholder="Selecciona un plan de estudios"
                    className="max-w-xs"
                  >
                    {(data) => {
                      console.log(data)
                      return <SelectItem key={data.materia} textValue={data.materia}>{data.materia}</SelectItem>
                    }}
                  </Select>
                }
              </div>
            )
          }
          <Button isDisabled={
            watch('plan_estudios') === undefined ||
            watch('career') === undefined ||
            watch('materia') === undefined ||
            watch('materia') === ''
          }
            onClick={() => {
              const curriculum = watch('plan_estudios')
              const career = watch('career')
              const subject = watch('materia')
              if (categorias.findIndex(categoria => categoria.curriculum === curriculum &&
                categoria.career === career &&
                categoria.subject === subject
              ) === -1
              ) {
                setCategorias(prevState => [
                  ...prevState,
                  {
                    curriculum,
                    career,
                    subject
                  }
                ])
              }
            }}>Agregar</Button>
          {
            categorias.length > 0
              ? (
                <div>
                  {
                    categorias.map((item, index) => (
                      <Chip key={index} onClose={() => handleClose(index)} variant="flat">
                        {JSON.stringify(item, 2)}
                      </Chip>
                    ))
                  }
                </div>
                )
              : ''

          }
        </section>
        <Input label='Titulo' {...register('example')} />

        <Input label='Autor' {...register('exampleRequired')} />

        <Input label='Editorial' {...register('exampleRequired')} />

        <Input label='ISBN' {...register('exampleRequired')} />
        <input type="submit" />
      </form>
    </main>
  )
}
