import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import InformationBook from './InformationBook'
import LinksBook from './LinksBook'

export function Book ({
  rol,
  book,
  saveBook,
  setSaveBook,
  url
}) {
  return (
    <article >
      {
        rol === 'ADMIN' &&
        <Link className='absolute bottom-5 right-8'>
          <Button color='danger' variant='shadow'>
            Editar Libro (SOLO ADMIN)
          </Button>
        </Link>
      }
      <InformationBook {...book} />
      <LinksBook
        book={book}
        saveBook={saveBook}
        setSaveBook={setSaveBook}
        url={url}
      />

    </article>
  )
}
