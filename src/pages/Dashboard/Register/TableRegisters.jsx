import { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { DeleteIcon, DetailsIcon, SuccessIcons } from '../../../components/Icons'
import { acceptRegister, declineRegister, getRegisters } from '../../../api/admin'

export const TableRegisters = () => {
  const [registers, setRegisters] = useState([])
  const deleteRequest = async (id) => {
    try {
      const res = await declineRegister(id)
      const newData = res.data.data.filter((item) => !item.accept)

      setRegisters(newData.map(item => ({
        cargo: item.class,
        email: item.email,
        name: item.name,
        id: item._id
      })))
    } catch (error) {
      console.log(error)
    }
  }
  const acceptRequest = async (id) => {
    try {
      const res = await acceptRegister(id)

      const newData = res.data.data.filter((item) => !item.accept)

      setRegisters(newData.map(item => ({
        cargo: item.class,
        email: item.email,
        name: item.name,
        id: item._id
      })))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const getRequestOfRegisters = async () => {
      try {
        const res = await getRegisters()

        const data = res.data.data.filter((item) => !item.accept)

        setRegisters(data.map(item => ({
          cargo: item.class,
          email: item.email,
          name: item.name,
          id: item._id
        })))
      } catch (error) {
        console.log(error)
      }
    }
    getRequestOfRegisters()
  }, [])

  return (
    <Table aria-label='tabla de registros de los maestros'>
      <TableHeader>
        <TableColumn>Nombre</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Cargo</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'Sin solicitudes'}>
        {registers.map((row) =>
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>

            <TableCell>{row.email}</TableCell>

            <TableCell>
              {row.cargo}
            </TableCell>

            <TableCell>
              <div className='flex gap-x-4'>
                <Button
                  isIconOnly
                  size='sm'
                  color='danger'
                  variant='light'
                  onClick={async () => await deleteRequest(row.id)}
                >
                  <DeleteIcon />
                </Button>
                <Button
                  isIconOnly
                  size='sm'
                  color='success'
                  variant='light'
                  onClick={async () => await acceptRequest(row.id)}
                >
                  <SuccessIcons />
                </Button>
                <Button
                  isIconOnly
                  size='sm'
                  variant='light'
                >
                  <DetailsIcon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
