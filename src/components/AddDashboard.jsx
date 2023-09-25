import React, { useRef, useState } from 'react'
import { loadExcelBooks } from '../api/books'
import { Button, Input, Link } from '@nextui-org/react'
export default function AddDashboard () {
  const inputFile = useRef(null)
  const [loadingUpload, setLoadingUpload] = useState(null)

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
      console.log('Error al subir el archivo')
      console.log(error.response.data)
    }
  }
  return (

    <>
      <section>
        <h2 className='mb-2 text-3xl'>Subir Libros atraves de Excel</h2>
        <span className='mr-4'><Link color='primary' href="/PlantillaBase.xlsm" download target='_blank'>Descarga la Plantilla de Excel </Link> o</span>
        <Input className='hidden' ref={inputFile} type="file" onChange={handleFileChange} />
        <Button
          className='text-white'
          startContent={
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' width="24" height="24" viewBox="0 0 24 24">
              <path d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 19V5h14l.002 14H5z"></path><path d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z"></path>
            </svg>
          }
          color='success'
          onClick={() => {
            inputFile.current.click()
          }}
        >Subir Excel

        </Button>
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
      </svg>
    </>
  )
}