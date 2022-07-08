import { useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const handlerToggleOpen = () => {
    if (open) {
      setOpen(false)
    } else setOpen(true)
  }

  return (
    <div className='lg:hidden'>
      <button
        onClick={handlerToggleOpen}
        className={`${
          open ? 'inline' : ''
        }  text-secondary text-4xl sm:text-6xl fixed top-4 right-5`}
      >
        <i className='fa-solid fa-bars'></i>
      </button>
      <div
        className={`${
          open ? 'translate-x-0' : ' translate-x-full'
        } bg-primary/100 w-3/4 rounded-tl-xl rounded-bl-xl h-screen fixed top-0 right-0 z-10 select-none ease-in-out duration-300`}
      >
        <nav className={`text-secondary`}>
          <button
            onClick={handlerToggleOpen}
            className='text-5xl sm:text-7xl fixed top-4 right-5'
          >
            <i>
              <i className={`fa-solid fa-xmark`}></i>
            </i>
          </button>
          <ul className=' flex flex-col gap-12 pt-28 text-3xl sm:text-4xl md:text-5xl'>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-30 group-hover:opacity-100   fa-solid fa-house'></i>
              <p className='opacity-30 group-hover:opacity-100   tracking-wider'>
                home
              </p>
              <i className='opacity-30 group-hover:opacity-100  fa-solid fa-chevron-right '></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-30 group-hover:opacity-100   fa-solid fa-hammer'></i>
              <p className='opacity-30 group-hover:opacity-100   tracking-wider'>
                skills
              </p>
              <i className='opacity-30 group-hover:opacity-100  fa-solid fa-chevron-right '></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-30 group-hover:opacity-100   fa-solid fa-briefcase'></i>
              <p className='opacity-30 group-hover:opacity-100   tracking-wider'>
                portfolio
              </p>
              <i className='opacity-30 group-hover:opacity-100  fa-solid fa-chevron-right '></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-30 group-hover:opacity-100   fa-solid fa-file-lines'></i>
              <p className='opacity-30 group-hover:opacity-100   tracking-wider'>
                curriculum
              </p>
              <i className='opacity-30 group-hover:opacity-100  fa-solid fa-chevron-right '></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-30 group-hover:opacity-100   fa-brands fa-github'></i>
              <p className='opacity-30 group-hover:opacity-100   tracking-wider'>
                github
              </p>
              <i className='opacity-30 group-hover:opacity-100  fa-solid fa-chevron-right '></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-30 group-hover:opacity-100   fa-brands fa-linkedin-in'></i>
              <p className='opacity-30 group-hover:opacity-100   tracking-wider'>
                LinkedIn
              </p>
              <i className='opacity-30 group-hover:opacity-100  fa-solid fa-chevron-right '></i>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav
