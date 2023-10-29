import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export function NavBar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  const menuItems = [
    {
      title: 'inicio', link: '/', private: false
    },
    {
      title: 'sugerencias', link: '/sugerencias', private: false
    },
    {
      title: 'perfil', link: '/perfil', private: false
    },
    {
      title: 'dashboard', link: '/dashboard', private: true
    }
  ].filter(link => {
    const userAutorizado = user.rol === 'ADMIN'
    if (userAutorizado) {
      return link
    }
    return link.private === userAutorizado
  })

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='bg-secondary/70'
    >
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand >
          <h2 className='mr-2'>I Love </h2>
          <p className="text-primary font-bold text-inherit"> UPALT</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex  gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.title}-desktop`}>
            <Link
              color="foreground"
              size="lg"
            >
              <button className='uppercase' onClick={() => navigate(item.link)}>
                {item.title}
              </button>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className=' bg-secondary/70'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.title}>
            <Link
              color='primary'
              className=" w-full"
              size="lg"
            >
              <button className='uppercase' onClick={() => navigate(item.link)}>
                {item.title}
              </button>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
// const [isOpen, toggleOpen] = useCycle(false, true)
// const containerRef = useRef(null)
// const { height } = useDimensions(containerRef)
//   const [isOpen, toggleOpen] = useCycle(false, true)
//   const containerRef = useRef(null)
//   const { height } = useDimensions(containerRef)
//   return (
//     <motion.nav
//         className='px-0 lg:px-6 z-50 absolute top-0 left-0 bottom-0 w-full sm:w-[300px] md:w-[300px] lg:w-full xl:bg-secondary lg:bg-secondary xl:static lg:static xl:py-3  lg:py-3 xl:flex lg:flex flex-wrap'
//         initial={false}
//         animate={isOpen ? 'open' : 'closed'}
//         custom={height}
//         ref={ containerRef }
//       >
//       <motion.div className="lg:hidden absolute top-0 left-0 bottom-0 w-full bg-secondary" variants={sidebar} />
//       <Navigation toggle={toggleOpen} isOpen={isOpen} />
//       <MenuButton toggle={toggleOpen} />
//     </motion.nav >
//   )
// }
