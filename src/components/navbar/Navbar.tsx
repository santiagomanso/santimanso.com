import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimationContext } from '../../context/animationContext'
import { responsiveNavItems } from '../../data/responsiveNavItems'
import { navItems } from '../../interfaces/navItemsInterface'
import path from 'path'

const Navbar = () => {
  const [active, setActive] = useState<String>('/') //active url
  const [open, setOpen] = useState(false) //modal phones-tab logic

  const { animationSwipe } = useContext(AnimationContext)

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

  return (
    <nav>
      {/* PC/LAPTOP nav */}
      <div
        className={`${animationSwipe} hidden lg:block text-secondary  tracking-widest select-none`}
      >
        <ul className=' flex justify-between items-center'>
          <li
            onClick={() => handleClick(responsiveNavItems[0])}
            className={`${
              active === responsiveNavItems[0].path
                ? ' text-gray-100 opacity-100 scale-110'
                : 'hover:-translate-y-1 hover:scale-105'
            } cursor-pointer  hover:text-gray-100 flex items-baseline gap-1 translate-y-0  transition-all ease-out duration-300 group`}
          >
            <p className='flex items-baseline gap-1'>
              <i
                className={`${responsiveNavItems[0].icon} text-xl 
                ${
                  active === responsiveNavItems[0].path
                    ? ''
                    : 'group-hover:rotate-[-23deg]'
                } transition-all ease-in-out duration-300`}
              ></i>

              <span
                className={` ${
                  active === responsiveNavItems[0].path
                    ? 'opacity-100'
                    : 'opacity-40'
                }  group-hover:opacity-100 text-lg`}
              >
                {responsiveNavItems[0].text}
              </span>
            </p>
          </li>
          <div className=' flex gap-20'>
            {responsiveNavItems &&
              responsiveNavItems.map((item) => {
                if (item.id !== 1) {
                  return (
                    <li
                      key={item.id}
                      onClick={() => handleClick(item)}
                      className={`${
                        active === item.path
                          ? ' text-gray-100 opacity-100 -translate-y-1 scale-110 '
                          : 'hover:-translate-y-1 hover:scale-105'
                      } cursor-pointer  hover:text-gray-100 flex items-baseline gap-1 translate-y-0  transition-all ease-out duration-300 group`}
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
                            active === item.path ? 'opacity-100' : 'opacity-40'
                          }  group-hover:opacity-100 text-lg`}
                        >
                          {item.text}
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
      <div className='lg:hidden'>
        {/* OPEN aside button */}
        <button
          onClick={() => setOpen(true)}
          className={`${
            open ? 'inline' : ''
          }  text-white text-4xl sm:text-5xl absolute top-4 sm:top-15 right-8 z-10`}
        >
          <i className='fa-solid fa-bars'></i>
        </button>

        <aside
          className={`${
            open ? 'translate-x-0' : ' translate-x-full'
          } bg-gradient-to-br from-primary to-zinc-900 w-full md:w-3/5 h-screen fixed top-0 right-0 z-10 select-none ease-in-out duration-300`}
        >
          <article className={`text-secondary`}>
            {/* CLOSE aside button */}
            <button
              onClick={() => setOpen(false)}
              className='text-5xl sm:text-6xl fixed top-3 right-8'
            >
              <i className={`fa-solid fa-xmark`}></i>
            </button>
            <ul className=' flex flex-col gap-12 pt-20 px-2 text-3xl sm:text-4xl '>
              {responsiveNavItems &&
                responsiveNavItems.map((item) => {
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
                      <p className='tracking-wider'>{item.text}</p>
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
        </aside>
      </div>
    </nav>
  )
}

export default Navbar
