import { Button, User } from '@nextui-org/react'
import { StructureBase } from '../../components/StructureBase'
import { useAuth } from '../../hooks/useAuth'

import { useEffect, useState } from 'react'
import { getFavoriteBooks } from '../../api/user'
import { Preferences } from './Preferences'

export default function Profile () {
  const { user, logout } = useAuth()
  const [favoriteBooks, setFavoriteBooks] = useState([])

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
          <Preferences favoriteBooks={favoriteBooks} />
          <Button
            onClick={logout}
            color='danger'
          >
            Cerrar Sesion
          </Button>
        </div>
      </article>
    </StructureBase>
  )
}
