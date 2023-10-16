/* eslint-disable no-unused-vars */
import { Button, TableCell } from '@nextui-org/react'
import { DeleteIcon, DetailsIcon, SuccessIcons } from '../Icons'
import { acceptRegister, declineRegister } from '../../api/admin'

export const TableRowRegisters = ({ id, name, email, class: cargo }) => {
  const deleteRequest = async (id) => {
    try {
      console.log(await declineRegister({ id }))
    } catch (error) {
      console.log(error)
    }
  }
  const acceptRequest = async (id) => {
    try {
      console.log(await acceptRegister({ id }))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <TableCell>{name}</TableCell>

      <TableCell>{email}</TableCell>

      <TableCell>
        {cargo}
      </TableCell>

      <TableCell>
        <div className='flex gap-x-4'>
          <Button
            isIconOnly
            size='sm'
            color='danger'
            variant='light'
            onClick={() => deleteRequest(id)}
          >
            <DeleteIcon />
          </Button>
          <Button
            isIconOnly
            size='sm'
            color='success'
            variant='light'
            onClick={() => acceptRequest(id)}
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
    </>
  )
}
