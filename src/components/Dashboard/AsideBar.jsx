import { AsideBarList } from './AsideBarList'

export const AsideBar = ({ setRoute, route }) => {
  return (
    <aside className=" flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out -translate-x-full lg:translate-x-0 m-0 fixed z-40 inset-y-0 left-0  border-r  border-r-neutral-200" id="sidenav-main">
      <div className="h-full bg-secondary">

        <div className='flex justify-center'>
          <a className=" transition-colors duration-200 ease-in-out " href="/">
            <img alt="Logo" src="/logo_upalt_sin_fondo.png" className="object-cover h-[82px] w-min" />
          </a>
        </div>

        <div className="hidden border-b  lg:block border-white/50"></div>
        <div className="relative pl-3 ">
          <AsideBarList setRoute={setRoute} route={route} />
        </div>
      </div>
    </aside>
  )
}
