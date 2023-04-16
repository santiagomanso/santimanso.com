import { useContext, useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimationContext } from '../../context/animationContext'
import { responsiveNavItems } from '../../data/responsiveNavItems'
import { navItems } from '../../interfaces/navItemsInterface'
import ThemeSwitcher from '../theme/ThemeSwitcher'
import { keyboardKey } from '@testing-library/user-event'
import Footer from '../Footer'
import LanguageSwitcher from '../LanguageSwitcher'
import { LanguageContext } from '../../context/LanguageContext'

const Navbar = () => {
  const { language } = useContext(LanguageContext)
  const [active, setActive] = useState<String>('/') //active url
  const [open, setOpen] = useState(false) //modal phones-tab logic
  const menuRef = useRef<HTMLDivElement>(null)
  const { animationSwipe } = useContext(AnimationContext)

  //pdf
  const cv = require('../../assets/SantiagoMansoCastroCV.pdf')

  const navigate = useNavigate()

  /* This function recieves a link such as /, /portfolio and set it as the active state, then we use tailwind classes to apply some styling by using this active class on the <li> element */
  const handleClick = (item: navItems) => {
    if (active !== item.path && !item.newTab) {
      //dont navigate if the link is the actual url
      setOpen(false)
      setActive(item.path)
      navigate(item.path)
    }
    if (item.newTab) {
      setOpen(false)
      window.open(item.path, '_blank')
    }
  }

  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/portfolio') {
      setActive(location.pathname)
      setOpen(false)
    }
  }, [location])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    const keyHandler = (e: keyboardKey) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', keyHandler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.addEventListener('keydown', keyHandler)
    }
  })

  return (
    <nav className='lg:py-1'>
      {/* PC/LAPTOP nav */}
      <div
        className={`hidden lg:block text-gray-700 dark:text-secondary  tracking-widest select-none`}
      >
        <ul className=' flex justify-between items-center'>
          <li
            onClick={() => handleClick(responsiveNavItems[0])}
            className={`${
              active === responsiveNavItems[0].path
                ? ' dark:text-gray-100 opacity-100 scale-110'
                : 'hover:-translate-y-1 hover:scale-105 text-gray-700 dark:text-secondary'
            } cursor-pointer  flex items-baseline gap-1 translate-y-0  transition-all ease-out duration-300 groupo hover:text-black dark:hover:text-gray-100`}
          >
            <p className='flex items-baseline gap-1'>
              <i
                className={`${responsiveNavItems[0].icon} text-xl 
                ${
                  active === responsiveNavItems[0].path
                    ? 'text-black dark:text-gray-100 '
                    : 'group-hover:rotate-[-23deg] hover:text-black'
                } transition-all ease-in-out duration-300 dark:hover:text-gray-100`}
              ></i>

              <span
                className={` ${
                  active === responsiveNavItems[0].path ? ' ' : ''
                }   group-hover:opacity-100 text-lg`}
              >
                {responsiveNavItems[0].text[language]}
              </span>
            </p>
          </li>

          <div className='flex items-center gap-20 z-20 relative'>
            {responsiveNavItems &&
              responsiveNavItems.map((item) => {
                if (item.id === 2) return <LanguageSwitcher key={item.id} />
                if (item.id === 3) return <ThemeSwitcher key={item.id} />
                if (item.id === 6) {
                  return (
                    <a
                      key={item.id}
                      className='cursor-pointer hover:text-black dark:hover:text-gray-100 flex items-baseline gap-1 translate-y-0  transition-all ease-out duration-300 group hover:-translate-y-1'
                      href={cv}
                      download='SantiagoMansoCastroCV.pdf'
                    >
                      <i
                        className={` ${
                          active === item.path ? 'rotate-[-23deg]' : ''
                        }
                          fa-solid text-xl group-hover:rotate-[-23deg] transition-all ease-in-out duration-300 ${
                            item.icon
                          } `}
                      ></i>
                      <p className=' dark:opacity-40 dark:group-hover:opacity-100 text-lg dark:group-hover:text-gray-100 hover:text-black hover:opacity-100'>
                        {item.text[language]}
                      </p>
                    </a>
                  )
                }
                if (item.id !== 1 && item.text[language] !== 'curriculum') {
                  return (
                    <li
                      key={item.id}
                      onClick={() => handleClick(item)}
                      className={`${
                        active === item.path
                          ? 'text-black dark:text-gray-100 opacity-100 -translate-y-1 scale-110 '
                          : 'hover:-translate-y-1 hover:scale-105'
                      } cursor-pointer hover:text-black dark:hover:text-gray-100 flex items-baseline gap-1 translate-y-0  transition-all ease-out duration-300 group`}
                    >
                      <p className='flex items-baseline gap-1'>
                        <i
                          className={` ${
                            active === item.path ? 'rotate-[-23deg]' : ''
                          }
                          fa-solid text-xl group-hover:rotate-[-23deg] transition-all ease-in-out duration-300 ${
                            item.icon
                          } `}
                        ></i>

                        <span
                          className={` ${
                            active === item.path
                              ? 'opacity-100'
                              : 'dark:opacity-40'
                          }  group-hover:opacity-100 text-lg`}
                        >
                          {item.text[language]}
                        </span>
                      </p>
                    </li>
                  )
                }
              })}
          </div>
        </ul>
      </div>

      {/* Phones */}
      <div className='lg:hidden' ref={menuRef}>
        {/* OPEN aside button */}
        <button
          onClick={() => setOpen(true)}
          className={`${
            open ? 'inline' : ''
          }  dark:text-gray-300 text-neutral-800 text-4xl sm:text-5xl absolute top-4 sm:top-15 right-8 z-50`}
        >
          <i className='fa-solid fa-bars'></i>
        </button>

        <aside
          className={`${
            open ? 'translate-x-0' : ' translate-x-full'
          } bg-gradient-to-br from-primary to-zinc-900 w-full md:w-3/5 h-screen fixed top-0 right-0 z-50 select-none ease-in-out duration-300`}
        >
          <article className={`text-secondary`}>
            {/* CLOSE aside button */}
            <button
              onClick={() => setOpen(false)}
              className='text-5xl sm:text-6xl fixed top-3 right-8'
            >
              <i className={`fa-solid fa-xmark`}></i>
            </button>
            <div className='absolute flex gap-32 top-3 left-6'>
              <ThemeSwitcher setOpen={setOpen} />
              <LanguageSwitcher />
            </div>
            <ul className=' flex flex-col gap-12 pt-20 px-2 text-3xl sm:text-4xl '>
              {responsiveNavItems &&
                responsiveNavItems.map((item) => {
                  if (item.id === 2 || item.id === 3) return ''
                  return (
                    <li
                      key={item.id}
                      onClick={() => handleClick(item)}
                      className={` ${
                        active === `${item.path}`
                          ? 'opacity-100 text-gray-100'
                          : 'opacity-60 text-secondary'
                      } px-5 flex justify-between items-center group`}
                    >
                      <i
                        className={` ${
                          active === `${item.path}` ? 'rotate-[23deg]' : ''
                        } transition-all ease-in duration-200 ${item.icon}`}
                      ></i>
                      <p className='tracking-wider'>{item.text[language]}</p>
                      <i
                        className={` ${
                          active === `${item.path}` ? 'rotate-90' : ''
                        } 
                      fa-solid fa-chevron-right transition-all ease-in-out duration-150`}
                      ></i>
                    </li>
                  )
                })}
            </ul>
          </article>
          <Footer displayOnPhones />
        </aside>
      </div>
    </nav>
  )
}

export default Navbar
