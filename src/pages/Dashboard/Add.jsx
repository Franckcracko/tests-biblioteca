import React, { useRef, useState } from 'react'
import { loadExcelBooks } from '../../api/books'
import { Button, Input, Link } from '@nextui-org/react'
import { DocIcon } from '../../components/Icons'
import { FormAddBook } from '../../components/Dashboard/FormAddBook'
export default function Add () {
  const inputFile = useRef(null)
  const [loadingUpload, setLoadingUpload] = useState(null)
  const [onDrag, setOnDrag] = useState(false)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    handleUpload(file)
  }

  const handleUpload = async (selectedFile) => {
    const formData = new FormData()
    formData.append('file', selectedFile)
    try {
      setLoadingUpload(false)
      console.log(await loadExcelBooks(formData))
      setLoadingUpload(true)
    } catch (error) {
      alert('Error al subir el archivo')
      console.log(error)
    }
  }

  return (
    <>
      <section>
        <h2 className='mb-2 text-3xl'>Subir Libros atraves de Excel</h2>
        <Input
          className='hidden'
          ref={inputFile}
          type="file"
          onChange={handleFileChange}
        />
        <section
          className={`
          flex flex-col space-y-4 items-center py-6   rounded-md
          ${onDrag
              ? 'bg-primary'
              : 'md:bg-slate-50'}`}
          onDragOver={(e) => {
            e.preventDefault()
            setOnDrag(true)
          }}
          onDragLeave={(e) => {
            e.preventDefault()
            setOnDrag(false)
          }}
          onDrop={(e) => {
            e.preventDefault()
            setOnDrag(false)
            handleUpload(e.dataTransfer.files[0])
          }}
        >

          <Button
            className='text-white'
            startContent={
              <DocIcon className='fill-white' />
            }
            color='secondary'
            onClick={() => {
              inputFile.current.click()
            }}
          >
            Subir
          </Button>
          <span className='text-black text-opacity-50'>O Arrastra tu Documento aquí</span>
        </section>
        <span className='mr-4'>
          <Link color='primary' href="/PlantillaBase.xlsm" download target='_blank'>Descarga la Plantilla de Excel </Link>
        </span>
        {
          loadingUpload !== null && !loadingUpload
            ? <p>Subiendo...</p>
            : loadingUpload && <p>Cargado con éxito</p>
        }
        <h2 className='text-3xl py-3'>Agregar Libros</h2>
        <p className='mb-2'>En el siguiente formulario podrás agregar libros, solo tienes que rellenar todos los datos solicitados.</p>
        <div className='w-full md:px-24 lg:px-36 mx-auto flex gap-y-4 flex-col '>
          {/* <FormBook /> */}
        </div>
      </section>

      <section className='pb-12'>
        <FormAddBook />
      </section>
    </>
  )
}
