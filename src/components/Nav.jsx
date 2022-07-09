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
      <nav className=' hidden lg:inline text-secondary  tracking-widest select-none'>
        <ul className='mt-10 flex justify-between items-center'>
          <li className=' cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group'>
            <i className='fa-solid text-2xl fa-code group-hover:rotate-[-23deg] transition-all ease-in-out duration-300'></i>
            <a>
              <p className='opacity-40 group-hover:opacity-100 text-xl'>home</p>
            </a>
          </li>
          <div className=' flex gap-20'>
            <li className=' cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group'>
              <i className='fa-solid text-2xl fa-folder-open group-hover:rotate-[-23deg] transition-all ease-in-out duration-300'></i>
              <a>
                <p className='opacity-40 group-hover:opacity-100 text-xl'>
                  portfolio
                </p>
              </a>
            </li>
            <li className=' cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group'>
              <i className='fa-solid text-2xl fa-file-lines group-hover:rotate-[-23deg] transition-all ease-in-out duration-300'></i>
              <a>
                <p className='opacity-40 group-hover:opacity-100 text-xl'>
                  curriculum
                </p>
              </a>
            </li>
            <li className=' cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group'>
              <i className='fa-solid text-2xl fa-hammer group-hover:rotate-[-23deg] transition-all ease-in-out duration-300'></i>
              <a>
                <p className='opacity-40 group-hover:opacity-100 text-xl'>
                  skills
                </p>
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <div className='lg:hidden'>
        <button
          onClick={handlerToggleOpen}
          className={`${
            open ? 'inline' : ''
          }  text-secondary text-4xl sm:text-5xl fixed top-13 sm:top-15 right-10`}
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
              className='text-5xl sm:text-6xl fixed top-12 right-5'
            >
              <i>
                <i className={`fa-solid fa-xmark`}></i>
              </i>
            </button>
            <ul className=' flex flex-col gap-12 pt-32 text-3xl sm:text-4xl '>
              <li className='px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary   fa-solid fa-house'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  home
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary   fa-solid fa-hammer'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  skills
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary   fa-solid fa-briefcase'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  portfolio
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary   fa-solid fa-file-lines'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  curriculum
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='md:hidden px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary   fa-brands fa-github'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  github
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='md:hidden px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary   fa-brands fa-linkedin-in'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  LinkedIn
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav
