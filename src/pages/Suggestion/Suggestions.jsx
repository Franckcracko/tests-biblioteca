import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react'
import { StructureBase } from '../../components/StructureBase'
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
      <main className='grid'>
        <h1 className='text-3xl mb-4 font-medium text-primary'>Sugerencias</h1>
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
        <div className='flex justify-center mt-4'>
          <Link to='/sugerencias/sugerencia'><Button color='primary'>Haz una sugerencia</Button></Link>
        </div>
      </main>
    </StructureBase>
  )
}
