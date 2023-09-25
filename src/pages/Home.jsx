import { useEffect, useState } from 'react'
import Filters from '../components/Filters'
import { StructureBase } from '../components/StructureBase'
import BookItem from '../components/BookItem'
import { Link, useSearchParams } from 'react-router-dom'
import { getBooks } from '../api/books'
import { Pagination } from '@nextui-org/react'

export function Home () {
  const [books, setBooks] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [params, setParams] = useSearchParams()

  useEffect(() => {
    const filterUpload = async () => {
      const data = await getBooks(params.toString())
      const dataBooks = data.data.books

      if (params.get('page') > dataBooks.totalPages) {
        return setParams({
          title: '',
          page: 1
        })
      }

      setBooks(dataBooks)
      setCurrentPage(dataBooks.page)
    }
    filterUpload()
  }, [params])

  useEffect(() => {
    const newSearchParams = {}
    const arrayConvert = Array.from(params.keys())
    arrayConvert.forEach(key => {
      newSearchParams[key] = params.get(key)
    })
    setParams({ ...newSearchParams, page: currentPage })
  }, [currentPage])

  return (
    <StructureBase>
      <Filters params={params} setParams={setParams} setBooks={setBooks} />
      {
        books &&
        <>
          <article className='mt-4 w-full grid grid-cols-[repeat(auto-fit_,minmax(250px_,1fr))] gap-10 '>
            {
              books.docs.map(book => (
                <BookItem key={book._id} {...book} />
              ))
            }
            {
              books.docs.length <= 0 &&
              <div className='w-full h-[calc(100vh-200px)] grid place-content-center'>
                <h2 className='text-3xl text-center'>SIN EXISTENCIA DE LIBRO(S)
                  <p className='font-medium text-primary underline'><Link to='/sugerencias'>¡Sugiere Un Libro!</Link></p>
                </h2>
              </div>
            }
          </article>
          {
            books.docs.length > 0 &&
            <footer className='mt-6 flex justify-center'>
              <Pagination
                total={books.totalPages}
                color="primary"
                page={currentPage}
                onChange={setCurrentPage}
              />
            </footer>
          }
        </>
      }
    </StructureBase >
  )
}
