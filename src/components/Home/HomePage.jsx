import { useEffect, useState } from 'react'
import { useFilter } from '../../hooks/useFilter'
import BookItem from './BookItem'
import { Link } from 'react-router-dom'
import CarruselBooks from './CarruselBooks'
import { TYPES_CAREERS } from '../../config'

const limit = 6

const paramsPopulate = new URLSearchParams({ limit })
const params = {
  ITIParam: new URLSearchParams({ career: TYPES_CAREERS.ITI, limit }),
  IEParam: new URLSearchParams({ career: TYPES_CAREERS.IE, limit }),
  IETParam: new URLSearchParams({ career: TYPES_CAREERS.IET, limit }),
  IIParam: new URLSearchParams({ career: TYPES_CAREERS.II, limit })
}

export default function HomePage () {
  const { filterUpload } = useFilter()
  const [popularBooks, setPopularBooks] = useState([])
  const [careersBooks, setCareersBooks] = useState([])

  useEffect(() => {
    filterUpload({ setBooks: setPopularBooks, params: paramsPopulate.toString() })
    const filterUploadCareer = ({ abbreviation, param }) => {
      filterUpload({
        setBooks: (books) => {
          setCareersBooks(prevState => {
            const objFinded = prevState.findIndex(obj => obj.career === abbreviation)

            if (objFinded !== -1) {
              const newState = structuredClone(prevState)

              newState[objFinded].books = books.docs

              return newState
            }

            return [
              ...prevState,
              {
                career: abbreviation,
                books: books.docs
              }
            ]
          }
          )
        },
        params: param.toString()
      })
    }
    filterUploadCareer({ abbreviation: 'ITI', param: params.ITIParam })
    filterUploadCareer({ abbreviation: 'IE', param: params.IEParam })
    filterUploadCareer({ abbreviation: 'IET', param: params.IETParam })
    filterUploadCareer({ abbreviation: 'II', param: params.IIParam })
  }, [])

  const bookPopularDocs = popularBooks.docs ?? []
  console.log()

  return (
    <article className='grid gap-y-12'>
      <section className=''>
        <div className='w-full flex justify-between items-center'>
          <h2 className='text-2xl font-semibold pb-2'>Populares</h2>
          {/* <Link to={`/?${popularBooks.toString()}`} className='underline text-blue-600'>Ver Mas..</Link> */}
        </div>
        <div className=' flex overflow-x-auto'>
          {
            bookPopularDocs.map(book => (
              <BookItem key={book._id} {...book} />
            ))
          }
        </div>
      </section>
      {
        careersBooks.map(carrerBooks => (
          <section key={carrerBooks.career}>
            <div className='w-full flex justify-between items-center'>
              <h2 className='text-2xl font-semibold pb-2'>{carrerBooks.career}</h2>
              <Link to={`/?${params[`${carrerBooks.career}Param`]}`} className='underline text-blue-600'>Ver Mas..</Link>
            </div>
            <div className='flex overflow-x-auto'>
              {
                carrerBooks.books.map(book => (
                  <BookItem key={`${book._id}_${carrerBooks.career}`} {...book} />
                ))
              }
            </div>
          </section>
        ))
      }
      <CarruselBooks />
    </article>
  )
}
