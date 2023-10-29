import { Button, Input } from '@nextui-org/react'

export default function FormEditBook ({ showForm, book }) {
  const keysAccept = [
    'observations', 'subjects', 'keywords', 'subjectCatalog', 'exist'
  ]
  return (
    <form className={`${!showForm ? 'hidden' : ''} `}>
       {
        Object.keys(book).filter(key => keysAccept.includes(key)).map(key => (
          <Input key={key} labelPlacement='outside-left' label={key} value={book[key]}></Input>
        ))
       }
      <Button color='primary' type='submit'>Actualizar</Button>
    </form>
  )
}
