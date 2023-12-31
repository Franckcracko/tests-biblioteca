import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { downloadPDF, existBook, getBook } from '../../api/books'
import { StructureBase } from '../../components/StructureBase'
import { useAuth } from '../../hooks/useAuth'
import Loading from '../../components/Loading'
import { Book } from './Book'

export default function BookPage () {
  const { user } = useAuth()
  const { id } = useParams()

  const [exist, setExist] = useState(false)
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState(null)
  const [url, setUrl] = useState(null)
  const [saveBook, setSaveBook] = useState(false)

  useEffect(() => {
    const validateBook = async () => {
      try {
        const res = await existBook(id)

        setExist(res.status === 200)

        const resBook = await getBook(id)
        const dataBook = resBook.data

        setBook(dataBook)

        const arrayFavorites = Array.from(user.booksFavorite)
        setSaveBook(arrayFavorites ? arrayFavorites.includes(id) : false)

        if (!dataBook.pdfsRecurso) { return setLoading(true) }

        const response = await downloadPDF(id)
        const urlBlob = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }))
        setUrl(urlBlob)
        setLoading(true)
      } catch (error) {
        setExist(false)

        setLoading(true)
      }
      console.log('Finalizo')
    }
    validateBook()
  }, [])

  if (!exist && loading) {
    return <Navigate to={'/'} replace />
  }

  if (exist) {
    return (
      <StructureBase>
        {
          book !== null
            ? <Book
              book={book}
              rol={user.rol}
              saveBook={saveBook}
              setSaveBook={setSaveBook}
              url={url}
            />
            : <Loading />
        }

      </StructureBase>
    )
  }
}

// <FormEditBook book={book} isAdmin={user.rol === 'ADMIN'} showForm={showForm} />
