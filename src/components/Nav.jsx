import { useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const handlerToggleOpen = () => {
    if (open) {
      setOpen(false)
    } else setOpen(true)
  }

  return (
    <>
      <button
        onClick={handlerToggleOpen}
        className={`${
          open ? 'hidden' : ''
        } text-secondary text-4xl fixed top-4 right-5`}
      >
        <i className='fa-solid fa-bars'></i>
      </button>
      <div
        className={`${
          open ? 'translate-x-0' : 'translate-x-full'
        } bg-primary/100 w-2/3 h-screen fixed top-0 right-0 z-10 select-none ease-in-out duration-300`}
      >
        <nav className={`  text-secondary text-3xl`}>
          <button onClick={handlerToggleOpen} className='fixed top-3 right-5'>
            <i>
              <i
                className={` text-secondary text-4xl lg:text-6xl fa-solid fa-xmark select-none`}
              ></i>
            </i>
          </button>
          <ul className=' flex flex-col gap-5 pt-20'>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-60 group-hover:opacity-100  text-3xl fa-solid fa-house'></i>
              <p className='opacity-60 group-hover:opacity-100  text-2xl'>
                home
              </p>
              <i className='opacity-60 group-hover:opacity-100  fa-solid fa-chevron-right text-2xl'></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-60 group-hover:opacity-100  text-3xl fa-solid fa-user-graduate'></i>
              <p className='opacity-60 group-hover:opacity-100  text-2xl'>
                about
              </p>
              <i className='opacity-60 group-hover:opacity-100  fa-solid fa-chevron-right text-2xl'></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-60 group-hover:opacity-100  text-3xl fa-solid fa-briefcase'></i>
              <p className='opacity-60 group-hover:opacity-100  text-2xl'>
                portfolio
              </p>
              <i className='opacity-60 group-hover:opacity-100  fa-solid fa-chevron-right text-2xl'></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-60 group-hover:opacity-100  text-3xl fa-solid fa-file-lines'></i>
              <p className='opacity-60 group-hover:opacity-100  text-2xl'>
                curriculum
              </p>
              <i className='opacity-60 group-hover:opacity-100  fa-solid fa-chevron-right text-2xl'></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-60 group-hover:opacity-100  text-3xl fa-brands fa-github'></i>
              <p className='opacity-60 group-hover:opacity-100  text-2xl'>
                github
              </p>
              <i className='opacity-60 group-hover:opacity-100  fa-solid fa-chevron-right text-2xl'></i>
            </li>
            <li className='px-5 flex justify-between items-center group'>
              <i className='opacity-60 group-hover:opacity-100  text-3xl fa-brands fa-linkedin-in'></i>
              <p className='opacity-60 group-hover:opacity-100  text-2xl'>
                LinkedIn
              </p>
              <i className='opacity-60 group-hover:opacity-100  fa-solid fa-chevron-right text-2xl'></i>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav
