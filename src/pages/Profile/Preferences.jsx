import { Accordion, AccordionItem } from '@nextui-org/react'
import { FavoriteIcon, PreferencesIcon } from '../../components/Icons'
import { Link } from 'react-router-dom'
import ListSaveBooks from './ListSaveBooks'

const itemClasses = {
  base: 'py-0 w-full',
  title: 'font-normal text-medium',
  indicator: 'text-medium',
  content: 'text-small px-2 mb-2'
}

export function Preferences ({ favoriteBooks }) {
  return (
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
  )
}
