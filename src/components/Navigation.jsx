import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { Link } from 'react-router-dom'
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}
export const variantsItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}
export function Navigation ({ toggle, isOpen }) {
  return (
    <>
      <motion.ul
        variants={variants}
        className='absolute top-28 w-60 pl-12  grid gap-y-12 lg:hidden xl:hidden  '
      >
        <motion.li variants={variantsItem} className='text-2xl uppercase mx-auto font-medium text-white'>
          Biblioteca
        </motion.li>
        {itemIds.map(i => (
          <MenuItem toggle={toggle} open={isOpen} i={i} key={i.title} />
        ))}
      </motion.ul>

      <motion.ul
        variants={variants}
        className='hidden lg:flex xl:flex justify-between items-center gap-x-6 '
      >
        {itemIds.map(i => (
          <motion.li
            initial={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            key={i.title}
          >
            <Link
              className='text-xl uppercase text-white transition-colors hover:text-primary'
              to={i.link}
            >
              {i.title}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}
const itemIds = [
  {
    title: 'inicio', link: '/'
  },
  {
    title: 'sugerencias', link: '/sugerencias'
  },
  {
    title: 'dashboard', link: '/dashboard'
  }
]
