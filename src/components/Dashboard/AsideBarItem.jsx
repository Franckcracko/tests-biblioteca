export const AsideBarItem = ({ setRoute, keyword, active = false, text }) => {
  return (
    <li>
      <span className='flex px-4 py-2'>
        <button
          onClick={() => setRoute(keyword)}
          className={`transition-colors ${active
            ? 'font-semibold text-[0.95rem] uppercase text-primary/90 cursor-default'
            : 'text-[1.05rem] text-white hover:text-primary cursor-pointer'}`}
        >
          {text}
        </button>
      </span>
    </li>
  )
}
