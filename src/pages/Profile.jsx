import { Accordion, AccordionItem, User } from '@nextui-org/react'
import { StructureBase } from '../components/StructureBase'
import { useAuth } from '../hooks/useAuth'
import { FavoriteIcon, PreferencesIcon } from '../components/Icons'
import ListSaveBooks from '../components/ListSaveBooks'
import { useEffect, useState } from 'react'
import { getFavoriteBooks } from '../api/user'
import { Link } from 'react-router-dom'

export default function Profile () {
  const { user } = useAuth()
  const [favoriteBooks, setFavoriteBooks] = useState([])
  const itemClasses = {
    base: 'py-0 w-full',
    title: 'font-normal text-medium',
    indicator: 'text-medium',
    content: 'text-small px-2 mb-2'
  }

  useEffect(() => {
    const getAllFavoritesBooks = async () => {
      try {
        const res = await getFavoriteBooks()
        const books = res.data.books
        setFavoriteBooks(books)
      } catch (error) {
        console.log(error)
      }
    }
    getAllFavoritesBooks()
  }, [])

  return (
    <StructureBase>
      <article className='w-full  '>
        <div className='mx-auto lg:w-3/5'>
          <h1 className='text-3xl mb-4 font-medium text-primary'>Perfil</h1>
          <div className='flex items-center p-2 rounded-xl  shadow-md'>
            <User
              className='my-4'
              name={user.username}
              description={(
                <span>
                  {user.email}
                </span>
              )}
            />
          </div>
          <section className='my-3 pr-11'>
            <Accordion
              className=" flex-col gap-1 w-full"
              variant="splitted"
              itemClasses={itemClasses}
            >
              <AccordionItem
                key="favorite_books"
                aria-label="Favorites Books"
                startContent={
                  <FavoriteIcon className='fill-primary' />
                }
                title="Libros Guardados"
              >
                {
                  favoriteBooks.length > 0
                    ? <ListSaveBooks favoriteBooks={favoriteBooks} />
                    : <h3>No Tienes Libros Favoritos.
                      <p className='text-blue-500 underline'><Link to='/'>Ir a Explorar</Link></p>
                    </h3>
                }
              </AccordionItem>
              <AccordionItem
                key="preferences"
                aria-label="Preferences User"
                startContent={
                  <PreferencesIcon className='fill-slate-500' />
                }
                title="Preferencias de Usuario"
              >
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </article>
    </StructureBase>
  )
}
