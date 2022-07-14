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
    words: ['Developer />', '/> <passionate />'],
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
          <div className='hidden lg:flex flex-col items-center pr-[0.20rem] '>
            <div className='flex items-baseline opacity-30 hover:opacity-100 gap-1 text-2xl group'>
              <label className='scale-0 group-hover:scale-100 transition-all duration-[400ms] translate-x-14 group-hover:-translate-x-2 '>
                linked
              </label>
              <i className=' text-white hover:text-[#0A66C2]  fa-brands fa-linkedin-in text-3xl hover:-rotate-[20deg] hover:scale-[1.5] transition-all ease-in duration-300 '></i>
            </div>
            <div className='flex items-center opacity-30 hover:opacity-100 gap-1 text-2xl group'>
              <label className='scale-0 group-hover:scale-100 transition-all duration-[400ms] translate-x-14 group-hover:-translate-x-2 '>
                github
              </label>
              <i className=' text-white hover:text-[#fafafa]  fa-brands fa-github text-3xl hover:-rotate-[20deg] hover:scale-[1.5] transition-all ease-in duration-300'></i>
            </div>
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
          className=' flex items-center gap-3 group  transition-all ease-in-out duration-300 hover:cursor-pointer cta__home'
        >
          <span className='bg-purple-500/80 text-white/60 group-hover:text-white tracking-wide scale-100 group-hover:-translate-x-6 group-hover:scale-[1.2] group-hover:-translate-y-2 transition-all ease-in-out duration-300   px-8 py-2 rounded-lg'>
            my work
          </span>
          <i className='fa-solid fa-display text-3xl text-white/60 group-hover:text-purple-500/80 group group-hover:rotate-[20deg] group-hover:scale-[1.5] transition-all ease-in duration-300 '></i>
        </div>
      </div>
    </aside>
  )
}

export default Header
