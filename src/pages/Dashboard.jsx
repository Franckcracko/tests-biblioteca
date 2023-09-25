import { useState } from 'react'
import AddDashboard from '../components/AddDashboard'
import HomeDashboard from '../components/HomeDashboard'

export function Dashboard () {
  const [route, setRoute] = useState('home')
  return (
    <main className='py-20 lg:py-6 px-6'>
      <aside className=" flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out -translate-x-full lg:translate-x-0 m-0 fixed z-40 inset-y-0 left-0  border-r  border-r-neutral-200" id="sidenav-main">
        <div className="h-full bg-secondary">

          <div className='flex justify-center'>
            <a className=" transition-colors duration-200 ease-in-out " href="/">
              <img alt="Logo" src="/logo_upalt_sin_fondo.png" className="object-cover h-[82px] w-min" />
            </a>
          </div>

          <div className="hidden border-b  lg:block border-white/50"></div>
          <div className="relative pl-3 ">
            <ul className="flex flex-col w-full font-medium">
              <li className="block pt-5 pb-[.15rem]">
                <div className="px-4 py-[.65rem]">
                  <button onClick={() => setRoute('home')} className="font-semibold text-[0.95rem] uppercase  text-primary/90">Inicio</button>
                </div>
              </li>
              <li>
                <span className="select-none flex items-center px-4 py-3 cursor-pointer my-[.4rem] rounded-xl">
                  <button onClick={() => setRoute('add')} className=" text-[1.05rem] text-white hover:text-primary">Agregar</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <article className='lg:ml-[300px]  relative h-full max-h-screen rounded-xl transition-all duration-200 '>
        {
          route === 'home'
            ? <HomeDashboard />
            : route === 'add'
              ? <AddDashboard />
              : <h1>No se que es entonces</h1>
        }
      </article>

    </main>

  )
}
