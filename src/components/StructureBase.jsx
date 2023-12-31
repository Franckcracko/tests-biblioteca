import { NavBar } from './Navbar/Navbar'

export function StructureBase ({ children }) {
  return (
    <>
      <NavBar />
      <main className='py-6 lg:py-6 px-6'>
        {children}
      </main>
    </>
  )
}
