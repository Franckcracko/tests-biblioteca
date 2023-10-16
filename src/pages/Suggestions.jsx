import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react'
import { StructureBase } from '../components/StructureBase'
import { Link } from 'react-router-dom'

export function Suggestions () {
  const columns = [
    {
      key: 'idSuggestion',
      label: 'ID'
    },
    {
      key: 'description',
      label: 'Descripción'
    },
    {
      key: 'statusSuggestion',
      label: 'Estado'
    },
    {
      key: 'optionsSuggestion',
      label: 'Opciones'
    }
  ]

  const rows = [
    {
      key: '1',
      idSuggestion: '4302',
      description: 'Soy una pequeña descripcion',
      statusSuggestion: 'Activa',
      optionsSuggestion: 'Borrar'
    }
  ]
  return (
    <StructureBase >
      <main className='grid place-content-center h-[calc(100vh-200px)]'>
        {/* <h1 className='text-primary -rotate-45 text-5xl lg:text-9xl font-medium'>EN DESARROLLO</h1> */}
        <h1>Sugerencias</h1>
        <p>
          En esta seccion podras hacer sugerencias, ya sea por alguna inconformidad sobre la plataforma o una sugerencia de algun libro que creas que sea de ayuda en un mejor repositorio de libros.
        </p>
        <Link to='/sugerencias/sugerencia'><Button color='primary'>Haz una sugerencia</Button></Link>
        <Table aria-label="Tabla De Sugerencias">
          <TableHeader columns={columns}>
            {(column) => <TableColumn className='text-black' key={column.key}>{column.label} </TableColumn>}
          </TableHeader>
          <TableBody items={rows} emptyContent={'No haz hecho alguna sugerencia.'}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </main>
    </StructureBase>
  )
}
