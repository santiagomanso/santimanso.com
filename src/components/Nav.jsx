import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimationContext } from '../context/animationContext'
import { NavContext } from '../context/NavContext'

const Nav = () => {
  const { pathname } = useLocation()

  const [openNav, showNav, setOpenNav, setShowNav] = useContext(NavContext)
  const [active, setActive] = useState('home')

  const handlerToggleOpen = () => {
    if (openNav) {
      setOpenNav(false)
    } else setOpenNav(true)
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
    <nav>
      {/* PC/LAPTOP nav */}
      <div className='hidden lg:block text-secondary  tracking-widest select-none'>
        <ul className=' flex justify-between items-center'>
          <li
            onClick={() => {
              setActive('home')
              handlerNavigate('/')
            }}
            className={`${
              active === 'home'
                ? ' text-white opacity-100 -translate-y-1 scale-110'
                : ''
            } cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group`}
          >
            <p className='flex items-baseline gap-1'>
              <i
                className={` ${active === 'home' ? 'rotate-[-23deg]' : ''}
              fa-solid fa-house text-xl group-hover:rotate-[-23deg] transition-all ease-in-out duration-300`}
              ></i>

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
                  ? ' text-white opacity-100 -translate-y-1 scale-110 '
                  : ''
              } cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group`}
            >
              <p className='flex items-baseline gap-1' href='/portfolio'>
                <i
                  className={` ${
                    active === 'portfolio' ? 'rotate-[-23deg]' : ''
                  }
                  fa-solid text-xl fa-folder-open group-hover:rotate-[-23deg] transition-all ease-in-out duration-300`}
                ></i>

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
                active === 'curriculum'
                  ? ' text-white opacity-100 -translate-y-1 scale-110'
                  : ''
              } cursor-pointer  hover:text-white flex items-baseline gap-1 translate-y-0 hover:translate-y-1 hover:scale-105 transition-all ease-out duration-300 group`}
            >
              <p className='flex items-baseline gap-1'>
                <i
                  className={` ${
                    active === 'curriculum' ? 'rotate-[-23deg]' : ''
                  }
                fa-solid text-xl fa-file-lines group-hover:rotate-[-23deg] transition-all ease-in-out duration-300`}
                ></i>

                <span
                  className={` ${
                    active === 'curriculum' ? 'opacity-100' : 'opacity-40'
                  }  group-hover:opacity-100 text-lg`}
                >
                  curriculum
                </span>
              </p>
            </li>
          </div>
        </ul>
      </div>

      {/* Phones */}
      <div
        className={` ${showNav ? 'inline' : 'hidden'} lg:hidden select-none`}
      >
        <button
          onClick={handlerToggleOpen}
          className={`${
            openNav ? 'inline' : ''
          }  text-secondary text-4xl sm:text-5xl fixed top-4 sm:top-15 right-8 z-10`}
        >
          <i className='fa-solid fa-bars'></i>
        </button>
        <div
          className={`${
            openNav ? 'translate-x-0' : ' translate-x-full'
          } bg-primary/100 w-3/4 rounded-tl-xl rounded-bl-xl h-screen fixed top-0 right-0 z-10 select-none ease-in-out duration-300`}
        >
          <nav className={`text-secondary`}>
            <button
              onClick={handlerToggleOpen}
              className='text-5xl sm:text-6xl fixed top-3 right-8'
            >
              <i>
                <i className={`fa-solid fa-xmark`}></i>
              </i>
            </button>
            <ul className=' flex flex-col gap-12 pt-20 px-2 text-3xl sm:text-4xl '>
              <li
                onClick={() => {
                  handlerToggleOpen()
                  setActive('home')
                  handlerNavigate('/')
                }}
                className={` ${
                  active === 'home' ? 'opacity-100 text-white' : 'opacity-60'
                } px-5 flex justify-between items-center group`}
              >
                <i
                  className={` ${
                    active === 'home' ? 'rotate-[23deg]' : ''
                  } group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-solid fa-house`}
                ></i>
                <p className=' hover:text-secondary   tracking-wider'>home</p>
                <i
                  className={` ${
                    active === 'home' ? 'rotate-90' : ''
                  } hover:text-secondary  fa-solid fa-chevron-right `}
                ></i>
              </li>

              <li
                onClick={() => {
                  handlerToggleOpen()
                  setActive('portfolio')
                  handlerNavigate('/portfolio')
                }}
                className={` ${
                  active === 'portfolio'
                    ? 'opacity-100 text-white'
                    : 'opacity-60'
                } px-5 flex justify-between items-center group`}
              >
                <i className=' group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-solid fa-briefcase'></i>
                <p className=' hover:text-secondary   tracking-wider'>
                  portfolio
                </p>
                <i
                  className={` ${
                    active === 'portfolio' ? 'rotate-90' : ''
                  } hover:text-secondary  fa-solid fa-chevron-right `}
                ></i>
              </li>
              <li
                onClick={() => {
                  handlerToggleOpen()
                  setActive('curriculum')
                  handlerNavigate('/curriculum')
                }}
                className={` ${
                  active === 'curriculum'
                    ? 'opacity-100 text-white'
                    : 'opacity-60'
                } px-5 flex justify-between items-center group`}
              >
                <i className=' group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-solid fa-file-lines'></i>
                <p className=' hover:text-secondary   tracking-wider'>
                  curriculum
                </p>
                <i
                  className={` ${
                    active === 'curriculum' ? 'rotate-90' : ''
                  } hover:text-secondary  fa-solid fa-chevron-right `}
                ></i>
              </li>
              <li
                className={` ${
                  active === 'github' ? 'opacity-100 text-white' : 'opacity-60'
                } px-5 flex justify-between items-center group`}
              >
                <i className=' group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-brands fa-github'></i>
                <p className=' hover:text-secondary   tracking-wider'>github</p>
                <i className=' hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
              <li
                className={` ${
                  active === 'linkedin'
                    ? 'opacity-100 text-white'
                    : 'opacity-60'
                } px-5 flex justify-between items-center group`}
              >
                <i className=' group-hover:rotate-[23deg] transition-all ease-in duration-200 hover:text-secondary   fa-brands fa-linkedin-in'></i>
                <p className=' hover:text-secondary   tracking-wider'>
                  LinkedIn
                </p>
                <i className=' hover:text-secondary  fa-solid fa-chevron-right '></i>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Nav
