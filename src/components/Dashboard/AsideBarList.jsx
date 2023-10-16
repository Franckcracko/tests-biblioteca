import { keywordPages } from '../../config'
import { AsideBarItem } from './AsideBarItem'

const keys = Object.keys(keywordPages)

export const AsideBarList = ({ setRoute, route }) => {
  return (
    <ul className="flex flex-col gap-y-4 w-full font-medium pt-5">
      {
        keys.map(key => (
          <AsideBarItem key={key} setRoute={setRoute} active={keywordPages[key].path === route} keyword={keywordPages[key].path} text={keywordPages[key].name} />
        ))
      }
    </ul>
  )
}
