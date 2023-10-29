import { Pagination } from '@nextui-org/react'
import { useFilter } from '../../hooks/useFilter'
import BookItem from './BookItem'
import { Link } from 'react-router-dom'

export default function HomeMobile () {
  const { books, updateParams } = useFilter()
  const totalPages = books.totalPages ?? 0
  const currentPage = books.page ?? 0
  const bookDocs = books.docs ?? []

  return (
    <>
      <article className='mt-4 w-full  '>
        <section className='grid grid-cols-[repeat(auto-fit_,minmax(250px_,1fr))] gap-10'>
          {
            bookDocs.map(book => (
              <BookItem key={book._id} {...book} />
            ))
          }
          <div className={`${bookDocs.length <= 0 ? '' : 'hidden'} w-full h-[calc(100vh-200px)] grid place-content-center`}>
            <h2 className='text-3xl text-center'>SIN EXISTENCIA DE LIBRO(S)
              <p className='font-medium text-primary underline'><Link to='/sugerencias'>¡Sugiere Un Libro!</Link></p>
            </h2>
          </div>
        </section>
      </article>
      <footer className='mt-6 flex justify-center'>
        <Pagination
          total={totalPages}
          color="primary"
          page={currentPage}
          onChange={(value) => {
            updateParams({ index: 'page', value })
          }}
        />
      </footer>
    </>
  )
}
