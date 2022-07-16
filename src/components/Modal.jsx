import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import ReactDom from 'react-dom'
import { AnimationContext } from '../context/animationContext'

export default function Modal({
  open,
  onClose,
  name,
  img,
  about,
  urlDemo,
  urlCode,
  stack,
  screenshots,
  video,
  dependencies,
}) {
  useEffect(() => {
    const detectKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    setTabContent(about)
    document.addEventListener('keydown', detectKeyDown)
  }, [about, onClose])

  const [tabContent, setTabContent] = useState('')
  const [active, setActive] = useState('about')

  const handlerTab = (arg) => {
    setTabContent(arg)
  }

  const [
    animation1,
    animation2,
    animation3,
    setAnimation1,
    setAnimation2,
    setAnimation3,
  ] = useContext(AnimationContext)
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div
        className='fixed top-0 left-0 bottom-0 right-0 bg-black/70'
        onClick={onClose}
      />
      <div className='fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-full lg:h-[70%] lg:w-[70vw] modal'>
        <div
          className={` ${animation3} flex flex-col lg:flex-row w-full h-full`}
        >
          <div className='text-white flex justify-center items-center w-full lg:w-2/3 h-2/4 lg:h-full bg-variant2 overflow-hidden select-none'>
            <img
              src={img}
              alt=''
              className='w-2/4 lg:w-3/4 h-3/4 animate-spin-slow'
            />
          </div>
          <div className=' flex flex-col justify-between items-start px-1 lg:px-4 pt-2 lg:pt-2 pb-6 w-full lg:w-2/3 h-full bg-variant1'>
            <div>
              <h2 className='text-secondary text-xl lg:text-2xl'>PROJECT</h2>
              <h1 className='text-white text-2xl lg:text-4xl tracking-wider'>
                {name}
              </h1>
              <ul className='flex flex-wrap gap-2 lg:gap-4 text-secondary mt-2 lg:mt-3 text-sm lg:text-xl modal__stack'>
                {stack.map((tech, i) => (
                  <li
                    key={i}
                    className='rounded-[3px] border-solid border-2 border-variant2 px-3 py-1 tracking-widest'
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className='mt-4'>
                <div className='flex justify-start text-md tracking-wider select-none hover:cursor-pointer tabs-header '>
                  <div
                    onClick={() => {
                      setActive('about')
                      handlerTab(about)
                    }}
                    className={`flex items-baseline gap-1 ${
                      active === 'about' ? 'bg-secondary/10' : 'bg-primary/60'
                    }   px-4 lg:px-6 py-2 group`}
                  >
                    <h2>about</h2>
                    <i
                      className={`fa-solid fa-address-card text-secondary ${
                        active === 'about'
                          ? ''
                          : ' group-hover:text-sky-600 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:translate-x-[0.10rem]'
                      }  transition-all duration-300`}
                    ></i>
                  </div>
                  <div
                    onClick={() => {
                      setActive('screenshots')
                      handlerTab(screenshots)
                    }}
                    className={`flex items-baseline gap-1 ${
                      active === 'screenshots'
                        ? 'bg-secondary/10'
                        : 'bg-primary/60'
                    }   px-4 lg:px-6 py-2 group`}
                  >
                    <h2>screenshots</h2>
                    <i
                      className={`fa-solid fa-camera text-secondary ${
                        active === 'screenshots'
                          ? ''
                          : ' group-hover:text-green-600 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:translate-x-[0.10rem]'
                      }  transition-all duration-300`}
                    ></i>
                  </div>
                  <div
                    onClick={() => {
                      setActive('video')
                      handlerTab(video)
                    }}
                    className={`flex items-baseline gap-1 ${
                      active === 'video' ? 'bg-secondary/10' : 'bg-primary/60'
                    }   px-6 py-2 group`}
                  >
                    <h2>Video</h2>
                    <i
                      className={`fa-solid fa-video text-secondary ${
                        active === 'video'
                          ? ''
                          : ' group-hover:text-red-500 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:translate-x-[0.10rem]'
                      }  transition-all duration-300`}
                    ></i>
                  </div>
                </div>
                <div className='bg-secondary/10 px-3 py-2 text-white text-lg lg:text-2xl font-console font-[200] rounded-br-lg rounded-bl-lg overflow-auto modal__about__container'>
                  <div className='h-[20vh] overflow-auto'>
                    <span className='font-console modal__about'>
                      {tabContent}
                    </span>
                    {(active === 'screenshots') | (active === 'video') ? (
                      <i className='fa-solid fa-person-digging text-yellow-400/80 text-3xl'></i>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-evenly w-full  select-none text-white modal__buttons'>
              <a
                href={urlDemo}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1 text-lg lg:text-2xl px-7 lg:px-12 py-2 border-2 border-white border-solid rounded-md bg-purple-700/70 hover:bg-purple-700 group hover:-translate-y-2 transition-all duration-300 hover:-rotate-3'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='eye'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                  className='svg-inline--fa fa-eye fa-w-18 text-white  w-5 lg:w-8'
                >
                  <path
                    fill='currentColor'
                    d='M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z'
                  ></path>
                </svg>
                <p className='text-white '>view live</p>
              </a>
              <a
                href={urlCode}
                target='_blank'
                rel='noreferrer'
                className='flex gap-1 items-center text-lg lg:text-2xl px-7 lg:px-12 py-2 border-2 border-white border-solid rounded-md bg-variant2 cta group transition-all duration-300 hover:-translate-y-2 hover:rotate-3'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='code'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 512'
                  className='svg-inline--fa fa-code fa-w-20 text-white group-hover:text-variant1 w-5 lg:w-8'
                >
                  <path
                    fill='currentColor'
                    d='M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z'
                  ></path>
                </svg>
                <p className='text-white group-hover:text-variant1'>code</p>
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setActive('about')
            onClose()
          }}
        >
          <i
            className={`${animation3} absolute right-3 top-0 text-secondary text-5xl lg:text-5xl fa-solid fa-xmark select-none `}
          ></i>
        </button>
      </div>
    </>,
    document.getElementById('portal')
  )
}
