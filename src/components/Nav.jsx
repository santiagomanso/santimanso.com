import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimationContext } from '../context/animationContext'

const Nav = () => {
  const { pathname } = useLocation()

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const handlerToggleOpen = () => {
    if (open) {
      setOpen(false)
    } else setOpen(true)
  }

  const [
    animation1,
    animation2,
    animation3,
    setAnimation1,
    setAnimation2,
    setAnimation3,
  ] = useContext(AnimationContext)

  const navigate = useNavigate()

  const handlerNavigate = (url) => {
    setAnimation1('animate__animated animate__backOutRight')
    setAnimation2('animate__animated animate__fadeOutLeft')
    setTimeout(() => {
      navigate(url)
      setAnimation1('animate__animated animate__fadeInLeft')
      setAnimation2('animate__animated animate__fadeInLeft')
    }, 1500)
  }

  useEffect(() => {
    if (pathname === '/portfolio') {
      setActive('portfolio')
    }
  }, [pathname])

  return (
    <>
      <nav className=' hidden lg:inline text-secondary  tracking-widest select-none'>
        <ul className=' flex justify-between items-center'>
          <li
            onClick={() => {
              setActive('home')
              handlerNavigate('/')
            }}
            className={`${
              active === 'home' ? ' text-white opacity-100' : ''
            } cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group`}
          >
            <p className='flex items-baseline gap-1'>
              <i className='fa-solid text-xl fa-code group-hover:rotate-[-23deg] transition-all ease-in-out duration-300'></i>

              <span
                className={` ${
                  active === 'home' ? 'opacity-100' : 'opacity-40'
                }  group-hover:opacity-100 text-lg`}
              >
                home
              </span>
            </p>
          </li>
          <div className=' flex gap-20'>
            <li
              onClick={() => {
                setActive('portfolio')
                handlerNavigate('/portfolio')
              }}
              className={`${
                active === 'portfolio'
                  ? ' text-white opacity-100 translate-y-1 scale-110 '
                  : ''
              } cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group`}
            >
              <p className='flex items-baseline gap-1' href='/portfolio'>
                <i className='fa-solid text-xl fa-folder-open group-hover:rotate-[-23deg] transition-all ease-in-out duration-300'></i>

                <span
                  className={` ${
                    active === 'portfolio' ? 'opacity-100' : 'opacity-40'
                  }  group-hover:opacity-100 text-lg`}
                >
                  portfolio
                </span>
              </p>
            </li>
            <li
              onClick={() => {
                setActive('curriculum')
                handlerNavigate('/curriculum')
              }}
              className={`${
                active === 'curriculum' ? ' text-white opacity-100' : ''
              } cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group`}
            >
              <p className='flex items-baseline gap-1'>
                <i className='fa-solid text-xl fa-file-lines group-hover:rotate-[-23deg] transition-all ease-in-out duration-300'></i>

                <span
                  className={` ${
                    active === 'curriculum' ? 'opacity-100' : 'opacity-40'
                  }  group-hover:opacity-100 text-lg`}
                >
                  curriculum
                </span>
              </p>
            </li>
            <li
              onClick={() => {
                setActive('skills')
                handlerNavigate('/skills')
              }}
              className={`${
                active === 'skills' ? ' text-white opacity-100' : ''
              } cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group`}
            >
              <p className='flex items-baseline gap-1'>
                <i className='fa-solid text-xl fa-hammer group-hover:rotate-[-23deg] transition-all ease-in-out duration-300'></i>

                <span
                  className={` ${
                    active === 'skills' ? 'opacity-100' : 'opacity-40'
                  }  group-hover:opacity-100 text-lg`}
                >
                  skills
                </span>
              </p>
            </li>
          </div>
        </ul>
      </nav>
      <div className='lg:hidden'>
        <button
          onClick={handlerToggleOpen}
          className={`${
            open ? 'inline' : ''
          }  text-secondary text-4xl sm:text-5xl fixed top-4 sm:top-15 right-8 z-10`}
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
                <i className='opacity-30 group-hover:opacity-100 group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-solid fa-house'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  home
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-solid fa-hammer'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  skills
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-solid fa-briefcase'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  portfolio
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-solid fa-file-lines'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  curriculum
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='md:hidden px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-brands fa-github'></i>
                <p className='opacity-30 group-hover:opacity-100 hover:text-secondary   tracking-wider'>
                  github
                </p>
                <i className='opacity-30 group-hover:opacity-100 hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li className='md:hidden px-5 flex justify-between items-center group'>
                <i className='opacity-30 group-hover:opacity-100 group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-brands fa-linkedin-in'></i>
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
