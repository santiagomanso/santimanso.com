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
    words: ['Web Developer', 'Student'],
    loop: false, // Infinit
    delaySpeed: 2000,
    typeSpeed: 200,
    deleteSpeed: 90,
  })

  return (
    <aside className='flex justify-between h-full pb-32'>
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
      <div className='hidden md:flex flex-col justify-end gap-2  text-5xl select-none'>
        <i className='opacity-30 hover:opacity-100 text-white hover:text-secondary  fa-brands fa-linkedin-in'></i>
        <i className='opacity-30 hover:opacity-100 text-white hover:text-secondary  fa-brands fa-github'></i>
      </div>
    </aside>
  )
}

export default Header
