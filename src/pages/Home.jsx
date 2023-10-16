import Filters from '../components/Home/Filters'
import { StructureBase } from '../components/StructureBase'
import HomePage from '../components/Home/HomePage'
import { useFilter } from '../hooks/useFilter'
import HomePageWithFilters from '../components/Home/HomePageWithFilters'

export function Home () {
  const { params } = useFilter()

  return (
    <StructureBase>
      <Filters />
      {params.size > 0
        ? <HomePageWithFilters />
        : <HomePage />
      }

    </StructureBase >
  )
}
