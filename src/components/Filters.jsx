import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Select, SelectItem, Tab, Tabs } from '@nextui-org/react'
import { subjectsArray } from '../config'

export default function Filters ({ params, setParams, setBooks }) {
  const [filters, setFilters] = useState({})

  const [selectedCareer, setSelectedCareer] = useState('ALL')
  const [selectedCurriculum, setSelectedCurriculum] = useState([])
  const [selectedSubjects, setSelectedSubjects] = useState([])

  const tabsCareers = [
    { title: 'TODOS', key: 'ALL' },
    { title: 'ITI', key: 'INGENIERIA EN TECNOLOGIAS DE LA INFORMACION' },
    { title: 'IE', key: 'INGENIERIA EN ENERGIA' },
    { title: 'IET', key: 'INGENIERIA EN ELECTRONICA Y TELECOMUNICACIONES' },
    { title: 'II', key: 'INGENIERIA INDUSTRIAL' }
  ]

  const filterBooks = async (filters) => {
    setParams({
      ...filters,
      page: 1
    })
  }

  useEffect(() => {
    filterBooks(filters)
  }, [filters])

  useEffect(() => {
    filterBooks()
  }, [])

  return (
    <article className='flex flex-wrap'>
      <section className='flex-auto min-w-[100px] max-w-[500px] mr-6'>
        <SearchBar getB={filterBooks} setFilters={setFilters} />
      </section>
      <section className='flex max-md:flex-col gap-x-5 items-center'>
        <Tabs
          aria-label="careers"
          selectedKey={selectedCareer}
          onSelectionChange={(selection) => {
            setSelectedCareer(selection)
            setFilters(prevState => ({
              ...prevState,
              careerString: selection
            }))
          }}
        >
          {
            tabsCareers.map(tab => (
              <Tab key={tab.key} title={tab.title} />
            ))
          }
        </Tabs>
        <div className='flex flex-wrap'>
          <Dropdown >
            <DropdownTrigger
            >
              <Button
                variant="bordered"
              >
                Filtrar Por Planes de Estudio
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              color='primary'
              aria-label="filtro plan de estudio"
              selectionMode="multiple"
              items={[
                { value: '2018 BIS', text: 'Plan 2018 BIS' },
                { value: '2010', text: 'Plan 2010' },
                { value: '2008', text: 'Plan 2008' }
              ]}
              closeOnSelect={false}
              selectedKeys={selectedCurriculum}
              onSelectionChange={(keys) => {
                const arrayKeys = Array.from(keys.values())
                setSelectedCurriculum(keys)
                setFilters(prevState => ({
                  ...prevState,
                  subjectCatalog: arrayKeys
                }))
              }}
            >
              {(item) => (
                <DropdownItem
                  key={item.value.toString()}
                  textValue={item.text}
                >
                  {item.text}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Select
            variant='bordered'
            label='Selecciona las Materias:'
            labelPlacement='inside'
            isMultiline={true}
            selectionMode='multiple'
            renderValue={(key) => ''}
            selectedKeys={selectedSubjects}
            onSelectionChange={(keys) => {
              const arrayKeys = Array.from(keys.values())
              console.log(keys.entries())
              setSelectedSubjects(keys)
              console.log(typeof arrayKeys)
              setFilters(prevState => ({
                ...prevState,
                subjectsQuery: arrayKeys
              }))
            }}
          >
            {
              subjectsArray
                .map((subject) => {
                  return <SelectItem key={subject} >
                    {subject}
                  </SelectItem>
                }
                )
            }
          </Select>
        </div>
      </section>

    </article >
  )
}
