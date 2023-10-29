import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { variantsItem } from './Navigation'

export const MenuItem = ({ i, toggle, open }) => {
  return (
    <motion.li
      variants={variantsItem}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={i.link}
        onClick={() => { open && toggle() }}
        className='text-xl uppercase text-white transition-colors hover:text-primary'
      >
        {i.title}

      </Link>
    </motion.li>
  )
}
