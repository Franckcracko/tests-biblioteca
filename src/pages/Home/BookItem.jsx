import { Link } from 'react-router-dom'
import { Button, useDisclosure } from '@nextui-org/react'
import { PdfIcon, VideoIcon, WorldIcon } from '../../components/Icons'
import ModalBook from './ModalBook'

export default function BookItem ({
  image,
  title,
  _id,
  resources,
  description
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <section className=' grid items-center justify-center ' >
      <button onClick={onOpen} className='w-full grid place-content-center '>
        <img className='shadow rounded max-sm:object-contain object-center object-cover max-w-[300px] min-w-[250px] min-h-[400px] h-auto w-full' src={image} alt={title} />
      </button>
      <h2 className='mt-1 text-xl min-h-[30px] max-h-[60px] overflow-hidden'>{title}</h2>
      <div className='flex gap-x-2 '>
        <PdfIcon className={`${resources.PDF ? 'fill-primary' : 'fill-none'}`} width={24} height={24} />
        <WorldIcon className={`${resources.WEB ? 'fill-primary' : 'fill-none'}`} width={24} height={24} />
        <VideoIcon className={`${resources.VIDEO ? 'fill-primary' : 'fill-none'}`} width={24} height={24} />
      </div>
      <Link
        className='mt-4'
        to={`/book/${_id}`}>
        <Button color='primary' className=' w-full h-[32px]'>
          Leer
        </Button>
      </Link>
      <ModalBook description={description} title={title} _id={_id} isOpen={isOpen} onOpenChange={onOpenChange} />
    </section>
  )
}
