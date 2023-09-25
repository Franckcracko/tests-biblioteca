import { Accordion, AccordionItem, Checkbox, CheckboxGroup, DropdownItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

const keyCurriculum = 'curriculum-filter'
const keySubject = 'subject-filter'
const selectCurriculumInitial = []
const selectSubjectInitial = []

export default function AccordionsFilters ({ setFilters }) {
  const [selectedCurriculums, setSelectedCurriculums] = useState(false)
  const [selectedSubjects, setSelectedSubjects] = useState(selectSubjectInitial)

  const valuesListChecks = {
    subjectCatalog: {
      title: 'Escoge Planes de Estudios',
      key: keyCurriculum,
      selected: selectedCurriculums,
      setSelected: setSelectedCurriculums,
      values: [
        { value: '2018_BIS', text: 'Plan 2018 BIS' },
        { value: '2010', text: 'Plan 2010' },
        { value: '2008', text: 'Plan 2008' }
      ]
    },
    subjects: {
      title: 'Escoge Materias',
      key: keySubject,
      selected: selectedSubjects,
      setSelected: setSelectedSubjects,
      values: [
        { value: 'redes 1', text: 'Redes 1' }
      ]
    }
  }

  useEffect(() => {
    console.log(selectedCurriculums)
    return () => {
      console.log('Salio', selectedCurriculums)
    }
  }, [selectedCurriculums])

  return (
    <DropdownItem variant="light">
    </DropdownItem>
  )
}
/*
{
        Object.keys(valuesListChecks).map(key => {
          console.log(valuesListChecks[key].selected, key)

          return (
            <AccordionItem key={key} aria-label={key} title={valuesListChecks[key].title}>
              <CheckboxGroup
                color="primary"
                value={valuesListChecks[key].selected}
                onValueChange={(selects) => {
                  valuesListChecks[key].setSelected(selects)

                  setFilters(prevState => ({
                    ...prevState,
                    [key]: selects
                  }))
                }}
              >
                {
                  valuesListChecks[key].values.map(value => (
                    <Checkbox key={value.value} value={value.value}>{value.text}</Checkbox>
                  ))
                }
              </CheckboxGroup>
            </AccordionItem>
          )
        })
      }
 */
