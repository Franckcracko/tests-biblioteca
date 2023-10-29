import { Listbox, ListboxItem } from '@nextui-org/react'
import { ListboxWrapper } from './ListBoxWrapper'
import { Link } from 'react-router-dom'

export default function ListSaveBooks ({ favoriteBooks }) {
  return (
    <ListboxWrapper>
      <Listbox
        variant="bordered"
        aria-label="Listbox menu with descriptions"
        items={favoriteBooks}
      >
        {(book) => (
          <ListboxItem
            key={book._id}
            textValue={book.title}
          >
            <Link className='underline text-primary' to={`/book/${book._id}`}>
              {book.title}
            </Link>
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  )
}
