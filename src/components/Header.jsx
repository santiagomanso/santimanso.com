import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimationContext } from '../context/animationContext'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Header = () => {
  const [
    animation1,
    animation2,
    animation3,
    setAnimation1,
    setAnimation2,
    setAnimation3,
  ] = useContext(AnimationContext)

  const navigate = useNavigate()

  const handlerNavigate = () => {
    setAnimation1('animate__animated animate__backOutRight')
    setAnimation2('animate__animated animate__fadeOutLeft')
    setTimeout(() => {
      navigate('/portfolio')
      setAnimation1('animate__animated animate__fadeInLeft')
      setAnimation2('animate__animated animate__fadeInLeft')
    }, 1500)
  }
  const { text } = useTypewriter({
    words: ['Developer />', '/> <Student />'],
    loop: false, // Infinit
    delaySpeed: 2000,
    typeSpeed: 150,
    deleteSpeed: 70,
  })

  return (
    <aside
      className={` ${animation1} w-full flex flex-col tracking-wider lg:mt-[65%] xl:mt-[40%] select-none`}
    >
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <h1 className=' text-3xl sm:text-4xl lg:text-5xl '>
            Santiago M<span className='inline md:hidden '>.</span>
            <span className='hidden md:inline'>anso</span> Castro
          </h1>
          <div className='hidden lg:flex flex-col '>
            <i className='opacity-30 hover:opacity-100 text-white hover:text-secondary  fa-brands fa-linkedin-in pr-0 text-3xl'></i>
            <i className='opacity-30 hover:opacity-100 text-white hover:text-secondary  fa-brands fa-github pr-0 text-3xl'></i>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-3  text-4xl select-none '>
        <span className='text-secondary text-3xl md:text-4xl italic tracking-wide mt-5 lg:mt-0'>
          {'<'}Frontend {text}
          <span className='text-white'>
            {''}
            <Cursor cursorStyle={'_'} />
          </span>
        </span>

        <div
          onClick={handlerNavigate}
          className='text-lime-600 flex items-center gap-3 group  transition-all ease-in-out duration-300 hover:cursor-pointer'
        >
          <span className=' text-3xl tracking-wide scale-100 group-hover:-translate-x-4 group-hover:scale-[1.2] group-hover:-translate-y-2 transition-all ease-in-out duration-300  border-2 border-solid border-lime-600 px-8 py-2 rounded-xl'>
            my work
          </span>
          <i className='fa-solid fa-display text-5xl group group-hover:rotate-[20deg] transition-all ease-in duration-300 text-lime-600'></i>
        </div>
      </div>
    </aside>
  )
}

export default Header
