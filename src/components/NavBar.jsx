import { motion, useCycle } from 'framer-motion'
import { Navigation } from './Navigation'
import { useEffect, useRef } from 'react'
import { MenuButton } from './MenuButton'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}
const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  }, [])

  return dimensions.current
}
export function NavBar () {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  return (
    <motion.nav
        className='z-50 absolute top-0 left-0 bottom-0 w-full sm:w-[300px] md:w-[300px] lg:w-full xl:bg-secondary lg:bg-secondary xl:static lg:static xl:py-3  lg:py-3 xl:flex lg:flex flex-wrap'
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={ containerRef }
      >
      <motion.div className="lg:hidden xl:hidden absolute top-0 left-0 bottom-0 w-full bg-secondary" variants={sidebar} />
      <Navigation toggle={toggleOpen} isOpen={isOpen} />
      <MenuButton toggle={toggleOpen} />
    </motion.nav >
  )
}
