export default function InformationBook ({
  image,
  title,
  description,
  author,
  year,
  editorial,
  exist
}) {
  return (
    <article className='flex flex-wrap gap-x-0 sm:gap-x-12 '>
      <div className='mb-6 max-w-[400px] h-auto mx-auto '>
        <img className='rounded-md shadow w-full object-center object-cover' src={image} alt={title} />
      </div>
      <section className='min-w-[200px] grid flex-1 gap-y-4'>
        <h2 className='text-2xl font-medium'>
          Descripcion:
          <span className='text-xl font-normal'> {description || 'No Hay Descripción'}</span>
        </h2>
        <h2 className='text-2xl font-medium'>
          Autor: <span className='text-xl font-normal'>{author}</span>
        </h2>
        <h2 className='text-2xl font-medium'>
          Año de Publicación: <span className='text-xl font-normal'>{year}</span>
        </h2>
        <h2 className='text-2xl font-medium'>
          Editorial: <span className='text-xl font-normal'>{editorial}</span>
        </h2>
        <h2 className='text-2xl font-medium'>
          Existencia Física: <span className='text-xl font-normal'>{exist ? 'Existe' : 'No Existe'}</span>
        </h2>
      </section>
    </article>
  )
}
