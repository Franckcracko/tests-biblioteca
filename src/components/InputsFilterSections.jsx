import { Select, SelectItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export function InputsFilterSections ({
  data,
  subjectValue,
  setSubjectValue,
  careerValue,
  setCareerValue,
  curriculumValue,
  setCurriculumValue,
  initialValue,
  categories
}) {
  const [curriculum, setCurriculum] = useState([])
  const [subjects, setSubjects] = useState([])

  const reset = () => {
    setCareerValue(initialValue)
    setSubjectValue(initialValue)
    setCurriculumValue(initialValue)
    setSubjects([])
    setCurriculum([])
  }

  useEffect(() => {
    reset()
  }, [categories])

  return (
    <section className='grid gap-y-2'>
      <strong>Agregue la relación de la carrera con el libro.</strong>
      <Select
        isRequired={categories.length <= 0}
        color='primary'
        variant='bordered'
        selectedKeys={careerValue}
        onSelectionChange={(key) => {
          const currentKey = key.currentKey
          setCareerValue(key)
          setSubjectValue(initialValue)
          setCurriculumValue(initialValue)

          if (key.size <= 0) {
            setSubjects([])
            return setCurriculum([])
          }

          setCurriculum(() =>
            data.find(value => value.nombre === currentKey).planEstudios ?? []
          )
        }}
        items={data}
        label="Carrera"
        placeholder="Selecciona una carrera"
        className="max-w-xs"
      >
        {(data) => {
          return <SelectItem key={data.nombre} value={data.nombre}>{data.nombre}</SelectItem>
        }}
      </Select>
      {
        (curriculum.length > 0) &&
        <Select
          isRequired
          color='primary'
          variant='bordered'
          selectedKeys={curriculumValue}
          onSelectionChange={(key) => {
            const currentKey = key.currentKey
            setCurriculumValue(key)
            setSubjectValue(initialValue)

            if (key.size <= 0) {
              return setSubjects([])
            }

            setSubjects(() =>
              curriculum.find(value => value.title === currentKey)
                .materias.map((materia, index) => ({ materia, id: index })) ?? []
            )
          }}
          label="Plan de Estudios"
          placeholder="Selecciona un plan de estudios"
          className="max-w-xs"
        >
          {curriculum.map((data) => {
            return <SelectItem key={data.title} value={data.title}>{data.title}</SelectItem>
          })}
        </Select>
      }
      {
        subjects.length > 0 &&
        <Select
          isRequired
          color='primary'
          variant='bordered'
          selectedKeys={subjectValue}
          onSelectionChange={setSubjectValue}
          label="Materia"
          placeholder="Selecciona un plan de estudios"
          className="max-w-xs"
        >
          {subjects.map((data) => {
            return <SelectItem key={data.materia} value={data.materia}>{data.materia}</SelectItem>
          })
          }
        </Select>
      }
    </section>
  )
}
