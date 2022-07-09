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
    words: ['Developer />', '/> </Student />'],
    loop: false, // Infinit
    delaySpeed: 2000,
    typeSpeed: 150,
    deleteSpeed: 70,
  })

  return (
    <aside className='flex justify-between h-full select-none'>
      <div className='flex flex-col md:justify-start lg:justify-end '>
        <h1 className='text-4xl sm:text-6xl lg:text-6xl'>
          Santiago M<span className='inline md:hidden'>.</span>
          <span className='hidden md:inline'>anso</span> Castro
        </h1>
        <span className='text-secondary text-3xl md:text-4xl italic tracking-wide mt-5 lg:mt-0'>
          {'<'}Frontend {text}
          <span className='text-white'>
            {''}
            <Cursor cursorStyle={'_'} />
          </span>
        </span>
      </div>
      <div className='hidden md:flex flex-col justify-end gap-3 items-end text-4xl select-none'>
        <i className='opacity-30 hover:opacity-100 text-white hover:text-secondary  fa-brands fa-linkedin-in pr-2'></i>
        <i className='opacity-30 hover:opacity-100 text-white hover:text-secondary  fa-brands fa-github pr-1'></i>
        <div className='text-secondary flex items-center gap-3 group  transition-all ease-in-out duration-300'>
          <span className=' text-2xl tracking-wide scale-100 group-hover:-translate-x-4 group-hover:scale-[1.2] group-hover:-translate-y-2 transition-all ease-in-out duration-300  border-2 border-solid border-secondary px-8 py-2 rounded-xl'>
            my work
          </span>
          <i className='fa-solid fa-display text-4xl group group-hover:rotate-[20deg] transition-all ease-in duration-300'></i>
        </div>
      </div>
    </aside>
  )
}

export default Header
