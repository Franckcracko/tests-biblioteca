import SearchBar from './SearchBar'

export default function Filters () {
  return (
    <article className='flex flex-wrap'>
      <section className='flex-auto min-w-[100px] max-w-[500px] mr-6'>
        <SearchBar />
      </section>
    </article >
  )
}
