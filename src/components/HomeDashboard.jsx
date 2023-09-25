import { useAuth } from '../hooks/useAuth'
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { VerticalDotsIcon } from './Icons'

export default function HomeDashboard () {
  const { user } = useAuth()
  return (
    <>
      <div className='flex flex-wrap'>

        <div className='px-3 w-full max-w-full mb-6 lg:w-8/12 sm:flex-none xl:mb-0'>
          <div className='bg-secondary/20  p-4 rounded-xl shadow-sm  mb-6'>
            <h1 className='text-4xl text-primary   font-medium mb-2'>Hola ADMIN!</h1>
            <p className='text-black text-lg mb-6'>{user.email}</p>
            <Button className='lg:w-[200px]' size='md' color='primary' variant='shadow'>
              Agrega un Nuevo Libro!
            </Button>
          </div>

          <div>
            <h2 className='text-xl font-medium pb-2'>Sugerencias</h2>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>SUGERENCIA</TableColumn>
                <TableColumn>ID ESTUDIANTE</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn>ACCIONES</TableColumn>
              </TableHeader>
              <TableBody emptyContent={'No hay Pendientes :D '}>
                <TableRow key="1">
                  <TableCell>AGREGAR</TableCell>
                  <TableCell>4301</TableCell>
                  <TableCell>
                    <Chip className="capitalize " color='success' size="sm" variant="flat">
                      Activo
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
                <TableRow key="2">
                  <TableCell>REMOVER</TableCell>
                  <TableCell>4302</TableCell>
                  <TableCell>
                    <Chip className="capitalize " color='default' size="sm" variant="flat">
                      Pendiente
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
              </TableBody>
            </Table>
          </div>
        </div>

        <div className='w-full lg:w-4/12 px-3 sm:flex-none'>
          <div className='p-2 bg-gray-100 rounded-xl  '>
            <div className="px-9 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
              <div className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/normal text-dark">
                <span className="text-dark text-5xl/none font-semibold mr-2 tracking-[-0.115rem]">11</span>

                <span className="pt-1 font-medium text-dark text-lg/normal">Sugerencias Finalizadas</span>
              </div>
            </div>
            <div className="flex items-end flex-auto  pt-0 px-9 ">
              <div className="flex flex-col items-center w-full mt-3">
                <div className="flex justify-between w-full mt-auto mb-2 font-semibold text-dark text-lg/normal">
                  <span className="mr-4 text-dark">1 Pendiente</span>
                  <span>50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
