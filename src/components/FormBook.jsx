import { useEffect, useState } from 'react'
import { db } from '../services/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { Button, Chip, Select, SelectItem } from '@nextui-org/react'
import { InputsFilterSections } from './InputsFilterSections'
import { InputCustom } from './Inputs'
import { keywords } from '../mocks/keywords'

const initialValue = new Set([])
const initialResources = {
  pdfs: [],
  webs: [],
  videos: []
}

export function FormBook () {
  const [data, setData] = useState([])
  const [categorias, setCategorias] = useState([])
  const [subjectValue, setSubjectValue] = useState(initialValue)
  const [careerValue, setCareerValue] = useState(initialValue)
  const [curriculumValue, setCurriculumValue] = useState(initialValue)
  const [resources, setResources] = useState(initialResources)
  const [listKeywords, setListKeywords] = useState(keywords)
  const {
    register,
    handleSubmit,
    watch
  } = useForm()

  const onSubmit = (data) => {
    const newData = { ...data, categories: categorias }
    console.log(newData)
  }

  const getData = async () => {
    const libros = collection(db, 'carreras')
    try {
      const q = query(libros, where('nombre', '==', 'INGENIERIA EN TECNOLOGIAS DE LA INFORMACION'))
      const querySnapshot = await getDocs(q)
      const data = querySnapshot.docs.map(doc => doc.data())
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClose = (indexRemove) => {
    setCategorias(categorias.filter((categoria, index) => index !== indexRemove))
  }
  const addCategory = () => {
    const curriculum = [...curriculumValue][0]
    const career = [...careerValue][0]
    const subjects = [...subjectValue][0]
    const indexCategory = categorias.findIndex(categoria =>
      categoria.curriculum === curriculum &&
      categoria.career === career &&
      categoria.subjects === subjects
    )
    if (indexCategory === -1) {
      setCategorias(prevState => [
        ...prevState,
        {
          curriculum,
          career,
          subjects
        }
      ])
    }
  }

  useEffect(() => {
    getData()
    setListKeywords(prevState => prevState.sort())
  }, [])
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid gap-y-6 w-full md:px-24 lg:px-36 mx-auto '
    >
      <article>
        {
          data.length > 0 &&
          (
            <InputsFilterSections
              initialValue={initialValue}
              subjectValue={subjectValue}
              setSubjectValue={setSubjectValue}
              careerValue={careerValue}
              setCareerValue={setCareerValue}
              curriculumValue={curriculumValue}
              setCurriculumValue={setCurriculumValue}
              data={data}
              categories={categorias}
            />
          )
        }

        <Button
          className='mt-3'
          color='primary'
          isDisabled={
            careerValue.size <= 0 ||
            curriculumValue.size <= 0 ||
            subjectValue.size <= 0
          }
          onClick={addCategory}
          variant='ghost'
        >Agregar</Button>

        {
          categorias.length > 0 &&
          <div className='flex py-2 flex-wrap gap-4'>
            {
              categorias.map((item, index) => (
                <Chip
                  key={index}
                  onClose={() => handleClose(index)}
                  color='primary'
                  size='lg'
                  variant="bordered"
                  classNames={{
                    base: 'py-6'

                  }}
                >
                  {
                    `${item.career} > ${item.curriculum} > ${item.subjects}`
                  }
                </Chip>
              ))
            }
          </div>
        }
      </article>
      {
        inputs.map(input => <InputCustom
          key={input.registerId}
          isRequired={input.required}
          label={input.label}
          register={register}
          registerId={input.registerId}
        />)
      }
      <Select
        color='primary'
        variant='bordered'
        label='Existe en la biblioteca'
        isRequired
        {...register('exist')}
        items={[
          { itemValue: true, itemText: 'Existe' },
          { itemValue: false, itemText: 'No Existe' }
        ]}
      >
        {(data) => {
          return <SelectItem key={data.itemText} value={data.itemValue}>{data.itemText}</SelectItem>
        }}
      </Select>
      <div className='flex flex-col-reverse '>
        <Select
          size='lg'
          variant='bordered'
          color='primary'
          label='Palabras Clave:'
          isMultiline={true}
          selectionMode='multiple'
          renderValue={(keywords) => {
            return (
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword) => (
                  <Chip key={keyword.key}>{keyword.textValue}</Chip>
                ))}
              </div>
            )
          }}
        >
          {
            listKeywords
              .map((keyword, index) => {
                return <SelectItem key={`${keyword}_${index}`} textValue={keyword}>
                  {keyword}
                </SelectItem>
              }
              )
          }
        </Select>
      </div>

      <article className='grid gap-y-4'>
        <h3 className='text-xl my-2'>Sube Tus recursos</h3>
        <section>
          <div className='flex gap-x-6 items-end'>
            <InputCustom
              isRequired={false}
              label={'Link PDF (OPCIONAL)'}
              register={register}
              registerId={'pdf'}
              placeholder='htpps://prueba.com/arhcivo.pdf'
            />
            <Button
              size='lg'
              type='button'
              variant='bordered'
              color='primary'
              onClick={() => {
                const link = watch('pdf')
                if (link === '') { return }

                setResources(prevState => {
                  const newState = structuredClone(prevState)
                  newState.pdfs = [
                    ...newState.pdfs,
                    link
                  ]
                  return newState
                })
              }}
            >
              Agregar Link
            </Button>
          </div>
          <ul>
            {
              resources.pdfs.length > 0 &&
              resources.pdfs.map(link => <li key={link}>{link}</li>)
            }
          </ul>
        </section>
        <section>
          <div className='flex gap-x-6 items-end'>
            <InputCustom
              isRequired={false}
              label={'Link WEB (OPCIONAL)'}
              register={register}
              registerId={'web'}
              placeholder='https:prueba.com/articulo_pdf'
            />
            <Button
              size='lg'
              type='button'
              variant='bordered'
              color='primary'
              onClick={() => {
                const link = watch('web')
                if (link === '') { return }
                setResources(prevState => {
                  const newState = structuredClone(prevState)
                  newState.webs = [
                    ...newState.webs,
                    link
                  ]
                  return newState
                })
              }}
            >
              Agregar Link
            </Button>
          </div>
          <ul>
            {
              resources.webs.length > 0 &&
              resources.webs.map(link => <li key={link}>{link}</li>)
            }
          </ul>
        </section>
        <section>
          <div className='flex gap-x-6 items-end'>
            <InputCustom
              isRequired={false}
              label={'Link VIDEO (OPCIONAL)'}
              register={register}
              registerId={'video'}
              placeholder='https://prueba.com/video_libro'
            />
            <Button
              size='lg'
              type='button'
              variant='bordered'
              color='primary'
              onClick={() => {
                const link = watch('video')
                if (link === '') { return }

                setResources(prevState => {
                  const newState = structuredClone(prevState)
                  newState.videos = [
                    ...newState.videos,
                    link
                  ]
                  return newState
                })
              }}
            >
              Agregar Link
            </Button>
          </div>
          <ul>
            {
              resources.videos.length > 0 &&
              resources.videos.map(link => <li key={link}>{link}</li>)
            }
          </ul>
        </section>
      </article>
      <Button size='lg' type="submit" color='primary' >
        Subir
      </Button>
    </form>
  )
}

const inputs = [
  {
    label: 'Titulo',
    registerId: 'title',
    required: true
  },
  {
    label: 'Autor',
    registerId: 'author',
    required: true
  },
  {
    label: 'Editorial',
    registerId: 'editorial',
    required: true
  },
  {
    label: 'ISBN',
    registerId: 'isbn',
    required: true
  },
  {
    label: 'Año en el que fue publicado el libro',
    registerId: 'year',
    required: true
  }
]
