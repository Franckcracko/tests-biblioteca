import { DownloadIcon, FavoriteIcon, PreviewIcon, VideoIcon, WorldIcon } from '../../components/Icons'
import { removeBookUser, saveBookUser } from '../../api/user'

export default function LinksBook ({ book, saveBook, setSaveBook, url }) {
  const sizeIcon = 36

  const saveOrRemoveBook = async () => {
    const payload = {
      idBook: book._id
    }

    try {
      !saveBook ? await saveBookUser(payload) : await removeBookUser(payload)
      setSaveBook(prevState => !prevState)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className='mt-4 sm:mt-0 flex gap-x-8'>
      {
        url &&
        <>
          <a className='h-min grid justify-items-center text-primary text-xs  transition-opacity opacity-80 fill-primary hover:opacity-100' download={`${book.title}.pdf`} href={url}>
            <DownloadIcon width={sizeIcon} height={sizeIcon} />
            PDF
          </a>
          <a target='_blank' href={url} rel="noreferrer" className='h-min grid justify-items-center text-primary text-xs  transition-opacity opacity-80 fill-primary hover:opacity-100' >
            <PreviewIcon className='h-[36px]' width={sizeIcon} height={sizeIcon} />
            Vista Previa
          </a>
        </>
      }
      {
        book.resources.WEB &&
        <a
          href={book.websRecurso}
          target='_blank'
          rel="noreferrer"
          className='h-min grid justify-items-center text-primary text-xs  transition-opacity opacity-80 fill-primary hover:opacity-100'
        >
          <WorldIcon width={sizeIcon} height={sizeIcon} />
          WEB
        </a>
      }
      {
        book.resources.VIDEO &&
        <a
          href={book.videosRecurso}
          target='_blank'
          rel="noreferrer"
          className='h-min grid justify-items-center text-primary text-xs  transition-opacity opacity-80 fill-primary hover:opacity-100'
        >
          <VideoIcon className='h-[36px]' width={sizeIcon} height={sizeIcon} />
          VIDEOS
        </a>
      }

      <button
        onClick={saveOrRemoveBook}
        className={`${saveBook ? 'fill-primary' : 'fill-slate-400'} h-min grid justify-items-center text-xs  transition-opacity opacity-80  hover:opacity-100`}
      >
        <FavoriteIcon width={sizeIcon} height={sizeIcon} />
        Guardar
      </button>
    </section>
  )
}
