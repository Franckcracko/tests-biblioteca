import { StructureBase } from '../../components/StructureBase'
import { useFilter } from '../../hooks/useFilter'
import HomeDesktop from './Home'
import HomeMobile from './HomeMobile'
import Filters from './Filters'

export default function Home () {
  const { params } = useFilter()

  return (
    <StructureBase>
      <Filters />
      {params.size > 0
        ? <HomeMobile />
        : <HomeDesktop />
      }

    </StructureBase >
  )
}
