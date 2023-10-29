import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { VerticalDotsIcon } from '../../../components/Icons'

const TYPES_STATUS_SUGGEST = {
  PENDING: 'PENDIENTE',
  APPROVED: 'APROBADO',
  DECLINE: 'RECHAZADO'
}

export const TableSuggests = ({ suggests }) => {
  console.log(suggests)
  return (
    <Table aria-label="tabla de sugerencias">
      <TableHeader>
        <TableColumn>SUGERENCIA</TableColumn>
        <TableColumn>ID</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACCIONES</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'No hay Pendientes :D '}>
        {suggests.map(suggest =>
          <TableRow key={suggest._id}>
            <TableCell>{suggest.action}</TableCell>
            <TableCell>{suggest.user}</TableCell>
            <TableCell>
              <Chip className="capitalize" color={TYPES_STATUS_SUGGEST.APPROVED === suggest.status ? 'success' : 'secondary'} size="sm" variant="flat">
                {suggest.status}
              </Chip>
            </TableCell>
            <TableCell>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-300" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>Ver Detalles</DropdownItem>
                  <DropdownItem>Eliminar</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
