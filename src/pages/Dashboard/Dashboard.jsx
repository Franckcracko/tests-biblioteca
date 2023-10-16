import { useState } from 'react'

import { keywordPages } from '../../config'

import AddDashboard from './Add'
import HomeDashboard from './Home'
import RegistersDashboard from './Registers'

import { AsideBar } from '../../components/Dashboard/AsideBar'

export const Dashboard = () => {
  const [route, setRoute] = useState(keywordPages.HOME_PAGE.path)

  const routesComponents = {
    [keywordPages.HOME_PAGE.path]: <HomeDashboard setRoute={setRoute} />,
    [keywordPages.ADD_PAGE.path]: <AddDashboard />,
    [keywordPages.REGISTERS_PAGE.path]: <RegistersDashboard />
  }

  return (
    <main className='py-20 lg:py-6 px-6'>
      <AsideBar setRoute={setRoute} route={route} />
      <article className='lg:ml-[300px]  relative h-full max-h-screen rounded-xl transition-all duration-200 '>
        {
          routesComponents[route] ?? <h1>No se que es entonces</h1>
        }
      </article>
    </main>
  )
}
